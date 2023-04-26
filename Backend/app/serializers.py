from rest_framework import serializers
from .models import *


class AllEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventModel
        fields = ["id", "event_name", "cover_image"]


class SingleEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventModel
        exclude = ["created_at", "updated_at"]


class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventParticipantsModel
        fields = "__all__"