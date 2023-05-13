from rest_framework import serializers
from .models import *


class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollegeModel
        fields = ["id", "college_name", "icon"]

class CollegePointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollegeModel
        fields = ["id", "college_name", "icon", "points"]

class CollegeRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollegeModel
        exclude = ["coordinator", "is_paid", "points", "created_at", "updated_at"]

class CoordinatorModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventCoordinatorModel
        fields = ["name", "phone", "photo"]

class CoordinatorModelSerializer2(serializers.ModelSerializer):
    class Meta:
        model = EventCoordinatorModel
        fields = ["name", "phone"]


class AllEventSerializer(serializers.ModelSerializer):
    coordinators = serializers.SerializerMethodField()
    class Meta:
        model = EventModel
        fields = ["id", "event_name", "coordinators"]
    def get_coordinators(self, obj):
        coo = []
        try:
            event_obj = EventModel.objects.get(id = obj.id)
            ser = CoordinatorModelSerializer2(event_obj.event_coordinator.all(), many=True)
            coo = ser.data
        except Exception as e:
            print(e)
        return coo


class SingleEventSerializer(serializers.ModelSerializer):
    coordinators = serializers.SerializerMethodField()
    class Meta:
        model = EventModel
        exclude = ["created_at", "updated_at"]
    def get_coordinators(self, obj):
        coo = []
        try:
            event_obj = EventModel.objects.get(id = obj.id)
            ser = CoordinatorModelSerializer(event_obj.event_coordinator.all(), many=True)
            coo = ser.data
        except Exception as e:
            print(e)
        return coo

class EventsByCategorySerializer(serializers.ModelSerializer):
    events = serializers.SerializerMethodField()
    class Meta:
        model = CategoryModel
        fields = ["category_name", "events"]
    def get_events(self, obj):
        eve = []
        try:
            cat_obj = CategoryModel.objects.get(id = obj.id)
            ser = AllEventSerializer(cat_obj.event_category.all(), many=True)
            eve = ser.data
        except Exception as e:
            print(e)
        return eve


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        exclude = ["created_at", "updated_at"]

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventParticipantsModel
        exclude = ["created_at", "updated_at", "event", "college"]

class ParticipantSerializer2(serializers.ModelSerializer):
    class Meta:
        model = EventParticipantsModel
        fields = ["id", "name"]

class EventParticipantsSerializer(serializers.ModelSerializer):
    participants = serializers.SerializerMethodField()
    class Meta:
        model = EventModel
        fields = ["id", "event_name", "participants"]
    def get_participants(self, obj):
        coo = []
        try:
            event_obj = EventModel.objects.get(id = obj.id)
            ser = ParticipantSerializer2(event_obj.event_participation.all(), many=True)
            coo = ser.data
        except Exception as e:
            print(e)
        return coo