from rest_framework import serializers
from .models import *


class TicketModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketModel
        exclude = ["created_at", "updated_at"]


class BuyTicketSerializer(serializers.Serializer):
    pass