from rest_framework.decorators import permission_classes, api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from authentication.models import *
from .serializers import *
from .models import *
import razorpay


client = razorpay.Client(auth=(settings.PUBLIC_KEY, settings.PRIVATE_KEY))



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
        if CollegeModel.objects.filter(coordinator=user).exists():
            return Response({"message": "You can register only 1 college"}, status=status.HTTP_401_UNAUTHORIZED)
        ser = CollegeRegistrationSerializer(data=request.data)
        if ser.is_valid():
            cart_obj = ser.save(coordinator=user)
            payment = client.order.create({
                'amount' :  400000,
                'currency' : 'INR' ,
                'payment_capture' : 1
            })
            cart_obj.order_id = payment['id']
            cart_obj.save()
            return Response({"message": "Registration Done", "data":ser.data}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@permission_classes([IsAuthenticated])
@api_view(["POST"])
def resultPage(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        ser = PaymentCredentials(data=request.data)
        if ser.is_valid():
            if not CollegeModel.objects.filter(coordinator=user).exists():
                return Response({"message": "College Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
            cart_obj =  CollegeModel.objects.get(coordinator=user)
            payment_credentials = {
                "razorpay_order_id" : cart_obj.order_id,
                "razorpay_payment_id" : ser.validated_data["razorpay_payment_id"],
                "razorpay_signature" : ser.validated_data["razorpay_signature"]
            }
            check = client.utility.verify_payment_signature(payment_credentials)
            if check:
                return Response({"message":"Payment Failed"}, status=status.HTTP_403_FORBIDDEN)
            cart_obj.payment_id = payment_credentials["razorpay_payment_id"]
            cart_obj.payment_signature = payment_credentials["razorpay_signature"]
            cart_obj.is_paid = True
            cart_obj.save()
            return Response({"message":"Payment Successfull"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AllCategories(ListAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer

class AllEvents(ListAPIView):
    # queryset = EventModel.objects.all()
    serializer_class = AllEventSerializer
    def list(self, request):
        try:
            cat = self.request.query_params.get('category')
            if cat is not None:
                queryset = EventModel.objects.filter(category__id = cat)
            else:
                queryset = EventModel.objects.all()
            ser = self.serializer_class(queryset, many=True)
            return Response(ser.data, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SingleEvents(RetrieveAPIView):
    queryset = EventModel.objects.all()
    serializer_class = SingleEventSerializer
    lookup_field = "id"


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def event_registration(request, event_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user).exists():
            return Response({"message": "You are not authoreised to perform this action"}, status=status.HTTP_401_UNAUTHORIZED)
        college = CollegeModel.objects.get(coordinator=user)
        if not EventModel.objects.filter(id=event_id).exists():
            return Response({"message": "Invalid Event ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        event = EventModel.objects.get(id=event_id)
        ser = ParticipantSerializer(data=request.data)
        if ser.is_valid():
            ser.save(event = event)
            return Response({"message":"Registration Accepted"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

