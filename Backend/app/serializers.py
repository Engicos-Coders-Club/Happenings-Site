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
        exclude = ["coordinator", "is_paid", "points", "order_id", "payment_id", "payment_signature", "created_at", "updated_at"]

class CoordinatorModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventCoordinatorModel
        fields = ["name", "phone", "photo"]

class AllEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventModel
        fields = ["id", "event_name", "cover_image"]

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

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        exclude = ["created_at", "updated_at"]

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventParticipantsModel
        fields = "__all__"

class PaymentCredentials(serializers.Serializer):
    razorpay_payment_id  = serializers.CharField(required = False)
    razorpay_signature  = serializers.CharField(required = False)
