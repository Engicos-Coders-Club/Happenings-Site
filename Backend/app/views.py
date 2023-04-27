from rest_framework.decorators import permission_classes, api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from authentication.models import *
from .serializers import *
from .models import *


class AllCategories(ListAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer


class AllEvents(ListAPIView):
    queryset = EventModel.objects.all()
    serializer_class = AllEventSerializer

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
