from rest_framework.decorators import permission_classes, api_view
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from authentication.models import *
from .serializers import *
from .models import *
import razorpay

client = razorpay.Client(auth=(settings.PUBLIC_KEY, settings.PRIVATE_KEY))


class GetTickets(ListAPIView):
    queryset = TicketModel.objects.filter(is_active=True)
    serializer_class = TicketModelSerializer


@permission_classes([IsAuthenticated])
@api_view(["POST"])
def buy_tickets(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        ser = BuyTicketSerializer(data=request.data)
        if ser.is_valid():
            if not TicketModel.objects.filter(id=ser.data["ticket"]).exists():
                return Response({"message": "Invalid Ticket ID"}, status=status.HTTP_404_NOT_FOUND)
            ticket = TicketModel.objects.get(id=ser.data["ticket"])
            quantity = ser.data["quantity"]
            amt = int(ticket.price * quantity * 100)
            print(ticket)
            print(user)
            print(amt)
            # payment = client.order.create({
            #     'amount' :  amt,
            #     'currency' : 'INR',
            #     'payment_capture' : 1 
            # })
            # cart_obj, _ = PassesModel.objects.get_or_create(
            #     user = user,
            #     ticket = ticket,
            #     is_paid = False,
            #     order_id = payment['id']
            # )
            # cart_obj.save()
            return Response({"message":"hello"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@permission_classes([IsAuthenticated])
@api_view(["POST"])
def resultPage(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        ser = PaymentCredentials(data=request.data)
        if ser.is_valid():
            if not UserModel.objects.filter(email=request.user.email).exists():
                return Response({"message": "College Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
            cart_obj =  UserModel.objects.get(email=request.user.email)
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
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
