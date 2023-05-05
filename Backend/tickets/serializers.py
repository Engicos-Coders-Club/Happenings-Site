from rest_framework import serializers
from .models import *


class TicketModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketModel
        exclude = ["created_at", "updated_at"]


class BuyTicketSerializer(serializers.Serializer):
    ticket = serializers.CharField(required = True)
    quantity = serializers.IntegerField(required = True)

class PaymentCredentials(serializers.Serializer):
    razorpay_payment_id  = serializers.CharField(required = False)
    razorpay_signature  = serializers.CharField(required = False)

