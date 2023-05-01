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
    queryset = TicketModel.objects.all()
    serializer_class = TicketModelSerializer


@permission_classes([IsAuthenticated])
@api_view(["POST"])
def buy_tickets(request, ticket_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not TicketModel.objects.filter(id=ticket_id).exists():
            return Response({"message": "Invalid Ticket ID"}, status=status.HTTP_404_NOT_FOUND)
        ticket = TicketModel.objects.get(id=ticket_id)
        ser = BuyTicketSerializer(data=request.data)
        if ser.is_valid():
            amt = int(ticket.price * 100)
            payment = client.order.create({
                'amount' :  amt,
                'currency' : 'INR' ,
                'payment_capture' : 1 
            })
            cart_obj, _ = PassesModel.objects.get_or_create(
                user = user,
                ticket = ticket,
                is_paid = False,
                order_id = payment['id']
            )
            cart_obj.save()
            return Response({"message":"hello"}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
