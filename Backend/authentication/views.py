from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .serializers import *
from .threads import *
from .models import *


class AllCollegesView(ListAPIView):
    queryset = CollegeModel.objects.all()
    serializer_class = CollegeSerializer


class CollegePointsSerializer(ListAPIView):
    queryset = CollegeModel.objects.all()
    serializer_class = CollegePointsSerializer


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def college_registration(request):
    try:
        user = UserModel.objects.get(email = request.user.email)
        ser = CollegeRegistrationSerializer(data=request.data)
        if ser.is_valid():
            ser.save(coordinator=user)
            return Response({"message": "Registration Done"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def google_authentication(request):
    try:
        ser = GoogleSocialAuthSerializer(data=request.data)
        if ser.is_valid():
            user_info = id_token.verify_oauth2_token(ser.data["token_id"], requests.Request(), settings.GOOGLE_CLIENT_ID)
            if not UserModel.objects.filter(email=user_info["email"]).exists():
                customer_obj = UserModel.objects.create(
                    profile_pic_url=user_info["picture"],
                    email=user_info["email"],
                    name=user_info["name"],
                    auth_provider="google"
                )
                customer_obj.set_password(settings.SOCIAL_SECRET)
                customer_obj.save()
            customer_obj = UserModel.objects.get(email=user_info["email"])
            user = authenticate(email=customer_obj.email, password=settings.SOCIAL_SECRET)
            if not user:
                return Response({"message":"Incorrect password"}, status=status.HTTP_406_NOT_ACCEPTABLE)
            jwt_token = RefreshToken.for_user(user)
            return Response({"message":"Login successfull", "token":str(jwt_token.access_token)}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"message": "Invalid or Expired toiken"}, status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def verify_jwt(request):
    try:
        if UserModel.objects.filter(email = request.user.email).exists():
            return Response({"valid": True}, status=status.HTTP_200_OK)
        return Response({"valid": False}, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(["POST"])
def signUp(request):
    try:
        data = request.data
        serializer = signupSerializer(data=data)
        if serializer.is_valid():
            name = serializer.data["name"]
            email = serializer.data["email"]
            phone = serializer.data["phone"]
            password = serializer.data["password"]
            if UserModel.objects.filter(email=email).first():
                return Response({"message":"Acount already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)
            new_customer = UserModel.objects.create(
                email = email,
                name = name,
                phone = phone,
                auth_provider = "email"
            )
            new_customer.set_password(password)
            new_customer.save()
            return Response({"message":"Account created"}, status=status.HTTP_201_CREATED)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def logIn(request):
    try:
        data = request.data
        serializer = loginSerializer(data=data)
        if serializer.is_valid():
            email = serializer.data["email"]
            password = serializer.data["password"]
            customer_obj = UserModel.objects.filter(email=email).first()
            if customer_obj is None:
                return Response({"message":"Account does not exist"}, status=status.HTTP_404_NOT_FOUND)
            user = authenticate(email=email, password=password)
            if not user:
                return Response({"message":"Incorrect password"}, status=status.HTTP_406_NOT_ACCEPTABLE)
            jwt_token = RefreshToken.for_user(user)
            return Response({"message":"Login successfull", "token":str(jwt_token.access_token)}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def forgot(request):
    try:
        data = request.data
        serializer = emailSerializer(data=data)
        if serializer.is_valid():
            email = serializer.data["email"]
            user_obj = UserModel.objects.filter(email=email).first()
            if not user_obj:
                return Response({"message": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)
            if user_obj.auth_provider != "email":
                return Response({"message": "Login using Google Auth"}, status=status.HTTP_401_UNAUTHORIZED)
            thread_obj = send_forgot_link(email)
            thread_obj.start()
            return Response({"message":"reset mail sent"}, status=status.HTTP_200_OK)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
def reset(request):
    try:
        data = request.data
        serializer = otpSerializer(data=data)
        if serializer.is_valid():
            otp = serializer.data["otp"]
            if not cache.get(otp):
                return Response({"message":"OTP expired"}, status=status.HTTP_408_REQUEST_TIMEOUT)
            if not UserModel.objects.filter(email=cache.get(otp)).first():
                return Response({"message":"user does not exist"}, status=status.HTTP_404_NOT_FOUND)
            user_obj = UserModel.objects.get(email=cache.get(otp))
            user_obj.set_password(serializer.data["pw"])
            user_obj.save()
            cache.delete(otp)
            return Response({"message":"Password changed successfull"}, status=status.HTTP_202_ACCEPTED)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
@permission_classes([IsAdminUser])
def specialEmail(request):
    try:
        email_recieptants = list(UserModel.objects.all().values_list("email", flat=True))
        ser = SpecialEmailSerializer(data=request.data)
        if ser.is_valid():
            thread_obj = send_special_email(ser.data["sub"], ser.data["body"], email_recieptants)
            thread_obj.start()
            return Response({"message":"Email Sent"})
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# ################################################################################################################################################

# @permission_classes([IsAdminUser])
# @api_view(["POST"])
# def sellersignUp(request):
#     try:
#         data = request.data
#         serializer = signupSerializer(data=data)
#         if serializer.is_valid():
#             name = serializer.data["name"]
#             email = serializer.data["email"]
#             phone = serializer.data["phone"]
#             password = serializer.data["password"]
#             if SellerModel.objects.filter(email=email).first():
#                 return Response({"message":"Acount already exists."}, status=status.HTTP_406_NOT_ACCEPTABLE)
#             obj = SellerModel.objects.create(email=email, name=name, phone=phone)
#             obj.set_password(password)
#             obj.save()
#             return Response({"message":"Account created"}, status=status.HTTP_201_CREATED)
#         return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(["POST"])
# def sellerlogIn(request):
#     try:
#         data = request.data
#         serializer = emailSerializer(data=data)
#         if serializer.is_valid():
#             email = serializer.data["email"]
#             obj = SellerModel.objects.filter(email=email).first()
#             if obj is None:
#                 return Response({"message":"Account does not exist"}, status=status.HTTP_404_NOT_FOUND)
#             if not obj.is_verified:
#                 return Response({"message":"Email not verified by admin"}, status=status.HTTP_401_UNAUTHORIZED)
#             thread_obj = send_login_otp(email)
#             thread_obj.start()
#             return Response({"message":"Login OTP sent"}, status=status.HTTP_202_ACCEPTED)
#         return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(["POST"])
# def sellerloginOTP(request):
#     try:
#         data = request.data
#         serializer = otpSerializer(data=data)
#         if serializer.is_valid():
#             password = serializer.data["pw"]
#             otp = serializer.data["otp"]
#             user_email = cache.get(otp)
#             if not cache.get(otp):
#                 return Response({"message":"OTP invalid or expired"}, status=status.HTTP_408_REQUEST_TIMEOUT)
#             obj = SellerModel.objects.filter(email=user_email).first()
#             if obj is None:
#                 return Response({"message":"Account does not exist"}, status=status.HTTP_404_NOT_FOUND)
#             if not obj.is_verified:
#                 return Response({"message":"Email not verified"}, status=status.HTTP_401_UNAUTHORIZED)
#             user = authenticate(email=user_email, password=password)
#             if not user:
#                 return Response({"message":"Incorrect password"}, status=status.HTTP_406_NOT_ACCEPTABLE)
#             jwt_token = RefreshToken.for_user(user)
#             cache.delete(otp)
#             return Response({"message":"Login successfull", "token":str(jwt_token.access_token)}, status=status.HTTP_202_ACCEPTED)
#         return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(["POST"])
# def sellerforgot(request):
#     try:
#         data = request.data
#         serializer = emailSerializer(data=data)
#         if serializer.is_valid():
#             email = serializer.data["email"]
#             user_obj = SellerModel.objects.filter(email=email).first()
#             if not user_obj:
#                 return Response({"message":"User does not exist."}, status=status.HTTP_404_NOT_FOUND)
#             if user_obj.is_verified == False:
#                 return Response({"message":"Account not verified"}, status=status.HTTP_412_PRECONDITION_FAILED)
#             thread_obj = send_forgot_link(email)
#             thread_obj.start()
#             return Response({"message": "reset mail sent"}, status=status.HTTP_200_OK)
#         return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(["POST"])
# @permission_classes([IsAdminUser])
# def sellerChangePassword(request):
#     try:
#         serializer = ChangePasswordSerializer(data=request.data)
#         if serializer.is_valid():
#             user_obj = SellerModel.objects.get(email=request.user.email)
#             if user_obj.is_verified == False:
#                 return Response({"message":"Account not verified"}, status=status.HTTP_412_PRECONDITION_FAILED)
#             if not check_password(serializer.data["old"], user_obj.password):
#                 return Response({"message":"Old Password Does not match"}, status=status.HTTP_409_CONFLICT)
#             user_obj.set_password(serializer.data["new"])
#             user_obj.save()
#             return Response({"message": "New Password Saved"}, status=status.HTTP_200_OK)
#         return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# @api_view(["POST"])
# def sellerreset(request):
#     try:
#         data = request.data
#         serializer = otpSerializer(data=data)
#         if serializer.is_valid():
#             otp = serializer.data["otp"]
#             if not cache.get(otp):
#                 return Response({"message":"OTP expired"}, status=status.HTTP_408_REQUEST_TIMEOUT)
#             if not SellerModel.objects.filter(email=cache.get(otp)).first():
#                 return Response({"message":"user does not exist"}, status=status.HTTP_404_NOT_FOUND)
#             user_obj = SellerModel.objects.get(email=cache.get(otp))
#             user_obj.set_password(serializer.data["pw"])
#             user_obj.save()
#             cache.delete(otp)
#             return Response({"message":"Password changed successfull"}, status=status.HTTP_202_ACCEPTED)
#         return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(["POST"])
# @permission_classes([IsAdminUser])
# def sellerVerify(request):
#     try:
#         data = request.data
#         serializer = emailSerializer(data=data)
#         if serializer.is_valid():
#             email = serializer.data["email"]
#             recieptant = SellerModel.objects.get(email=email)
#             if not recieptant:
#                 return Response({"message":"This account does not exist"}, status=status.HTTP_404_NOT_FOUND)
#             if recieptant.is_verified == True:
#                 return Response({"message":"Account already verified"}, status=status.HTTP_406_NOT_ACCEPTABLE)
#             recieptant.is_verified = True
#             recieptant.save()
#             return Response({"message":f"Verified account successfully.{email} is now admin."}, status=status.HTTP_202_ACCEPTED)
#         return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# @api_view(["POST"])
# @permission_classes([IsAdminUser])
# def sellerRemove(request):
#     try:
#         data = request.data
#         serializer = emailSerializer(data=data)
#         if serializer.is_valid():
#             email = serializer.data["email"]
#             recieptant = SellerModel.objects.get(email=email)
#             if not recieptant:
#                 return Response({"message":"This account does not exist"}, status=status.HTTP_404_NOT_FOUND)
#             if not recieptant.is_verified:
#                 return Response({"message":"Account is not admin"}, status=status.HTTP_409_CONFLICT)
#             thread_obj = remove_admin_email()
#             thread_obj.start()
#             return Response({"message":"Email Sent to remove Admin"}, status=status.HTTP_200_OK)
#         return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(["GET"])
# @permission_classes([IsAdminUser])
# def sellerList(request):
#     try:
#         objs = SellerModel.objects.all()
#         ser = SellerDisplaySerializer(objs, many=True)
#         return Response({"data":ser.data})
#     except Exception as e:
#         return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

