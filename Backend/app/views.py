from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.decorators import permission_classes, api_view
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from authentication.models import *
from .serializers import *
from .threads import *
from .models import *


class AllCategories(ListAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer


class EventsByCategoryView(ListAPIView):
    queryset = CategoryModel.objects.all()
    serializer_class = EventsByCategorySerializer


class AllEvents(ListAPIView):
    # queryset = EventModel.objects.all()
    serializer_class = AllEventSerializer
    def list(self, request):
        try:
            cat = self.request.query_params.get('category')
            day = self.request.query_params.get('day')
            if cat is not None:
                queryset = EventModel.objects.filter(category__id = cat)
                if day is not None:
                    if day == "1":
                        queryset = queryset.filter(timing__date="2023-05-19")
                    elif day == "2":
                        queryset = queryset.filter(timing__date="2023-05-20")
            elif day is not None:
                if day == "1":
                    queryset = EventModel.objects.filter(timing__date="2023-05-19")
                elif day == "2":
                    queryset = EventModel.objects.filter(timing__date="2023-05-20")
                if cat is not None:
                    queryset = queryset.filter(category__id = cat)
            else:
                queryset = EventModel.objects.all()
            ser = self.serializer_class(queryset, many=True)
            return Response(ser.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SingleEvents(RetrieveAPIView):
    queryset = EventModel.objects.all()
    serializer_class = SingleEventSerializer
    lookup_field = "id"


class CoordinatorsTeamsPage(ListAPIView):
    queryset = EventCoordinatorModel.objects.all()
    serializer_class = CoordinatorTeamsPageSerializer


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def college_registration(request):
    try:
        user = UserModel.objects.get(email = request.user.email)
        if CollegeModel.objects.filter(coordinator=user).exists():
            return Response({"message": "You can register only 1 college"}, status=status.HTTP_401_UNAUTHORIZED)
        ser = CollegeRegistrationSerializer(data=request.data)
        if ser.is_valid():
            ser.save(coordinator=user)
            # thread_obj = send_notif()
            # thread_obj.start()
            return Response({"message": "Registration Done", "data":ser.data}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def check_if_coordinator(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user).exists():
            return Response({
                "coordinator": False, "is_paid": False}, status=status.HTTP_200_OK)
        college = CollegeModel.objects.get(coordinator=user)
        if not college.is_paid:
            return Response({
                "coordinator": True, "is_paid": False}, status=status.HTTP_200_OK)
        else:
            return Response({
                "coordinator": True, "is_paid": True}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def event_registration(request, event_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user, is_paid=True).exists():
            return Response({"message": "You are not authoreised to perform this action"}, status=status.HTTP_401_UNAUTHORIZED)
        college_obj = CollegeModel.objects.get(coordinator=user, is_paid=True)
        if not EventModel.objects.filter(id=event_id).exists():
            return Response({"message": "Invalid Event ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        event_obj = EventModel.objects.get(id=event_id)
        ser = ParticipantSerializer(data=request.data)
        if ser.is_valid():
            num = event_obj.event_participation.filter(college=college_obj).count()
            if num < event_obj.no_of_participants:
                ser.save(event=event_obj, college=college_obj)
                return Response({"message":"Registration Accepted"}, status=status.HTTP_200_OK)
            else:
                return Response({"message":"Max Participants count Reached, Edit the Participant List"}, status=status.HTTP_412_PRECONDITION_FAILED)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def view_registration_status(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user, is_paid=True).exists():
            return Response({"message": "You are not authoreised to perform this action"}, status=status.HTTP_401_UNAUTHORIZED)
        college_obj = CollegeModel.objects.get(coordinator=user, is_paid=True)
        li = []
        for event_obj in EventModel.objects.all():
            event_data = {}
            event_data["id"] = event_obj.id
            event_data["event"] = event_obj.event_name
            event_data["no_of_participants"] = event_obj.no_of_participants
            event_data["registered_participants"] = event_obj.event_participation.filter(college=college_obj).count()
            if event_obj.event_participation.filter(college=college_obj).count() == event_obj.no_of_participants:
                event_data["status"] = True
            else:
                event_data["status"] = False
            li.append(event_data)
        return Response(li, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def view_individual_event_participants(request, event_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user, is_paid=True).exists():
            return Response({"message": "You are not authoreised to perform this action"}, status=status.HTTP_401_UNAUTHORIZED)
        college_obj = CollegeModel.objects.get(coordinator=user, is_paid=True)
        if not EventModel.objects.filter(id=event_id).exists():
            return Response({"message": "Invalid Event ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        event_obj = EventModel.objects.get(id=event_id)
        # partipants_objs = EventParticipantsModel.objects.filter(event=event_obj, college=college_obj)
        ser = ParticipantSerializer(event_obj.event_participation.filter(event=event_obj, college=college_obj), many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["PATCH"])
@permission_classes([IsAuthenticated])
def update_individual_event_participants(request, participant_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user).exists():
            return Response({"message": "You are not authoreised to perform this action"}, status=status.HTTP_401_UNAUTHORIZED)
        if not EventParticipantsModel.objects.filter(id=participant_id).exists():
            return Response({"message": "Invalid Participant ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        participant_obj = EventParticipantsModel.objects.get(id=participant_id)
        ser = ParticipantSerializer(participant_obj, data=request.data, partial=True)
        if ser.is_valid():
            ser.save()
            return Response({"message": "Participant detials updated", "data":ser.data}, status=status.HTTP_200_OK)
        return Response({"error":ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_participant_details(request, participant_id):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user).exists():
            return Response({"message": "You are not authoreised to perform this action"}, status=status.HTTP_401_UNAUTHORIZED)
        if not EventParticipantsModel.objects.filter(id=participant_id).exists():
            return Response({"message": "Invalid Participant ID"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        participant_obj = EventParticipantsModel.objects.get(id=participant_id)
        participant_obj.delete()
        return Response({"message": "Participant detials deleted"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def all_participants(request):
    try:
        user = UserModel.objects.get(email=request.user.email)
        if not CollegeModel.objects.filter(coordinator=user).exists():
            return Response({
                "coordinator": False, "is_paid": False}, status=status.HTTP_200_OK)
        college = CollegeModel.objects.get(coordinator=user)
        li = []
        for event_obj in EventModel.objects.all():
            event_data = {}
            event_data["id"] = event_obj.id
            event_data["event"] = event_obj.event_name
            event_data["max_participants"] = event_obj.no_of_participants
            event_data["registered_participants"] = event_obj.event_participation.filter(college=college).count()
            ser = ParticipantSerializer(event_obj.event_participation.filter(college=college), many=True)
            event_data["participants"] = ser.data
            li.append(event_data)
        return Response(li, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GetColleges(ListAPIView):
    queryset = CollegeModel.objects.all()
    serializer_class = CollegeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdminUser]


@api_view(["GET"])
@permission_classes([IsAdminUser])
def get_participants_by_college(request, college_id):
    try:
        if not CollegeModel.objects.filter(id=college_id).exists():
            return Response({"message": "Invalid College ID"}, status=status.HTTP_401_UNAUTHORIZED)
        college_obj = CollegeModel.objects.get(id=college_id)
        day = request.query_params.get('day')
        if day is not None:
            if day == "1":
                queryset = college_obj.college_participation.filter(event__timing__date="2023-05-19")
            elif day == "2":
                queryset = college_obj.college_participation.filter(event__timing__date="2023-05-20")
        else:
            queryset = college_obj.college_participation.all()
        ser = ParticipantSerializer3(queryset, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET"])
@permission_classes([IsAdminUser])
def get_participants_by_event(request, event_id):
    try:
        if not EventModel.objects.filter(id=event_id).exists():
            return Response({"message": "Invalid Event ID"}, status=status.HTTP_401_UNAUTHORIZED)
        event_obj = EventModel.objects.get(id=event_id)
        college_id = request.query_params.get('college')
        if college_id is not None:
            if CollegeModel.objects.filter(id=college_id).exists():
                college_obj = CollegeModel.objects.get(id=college_id)
                queryset = event_obj.event_participation.filter(college=college_obj)
        else:
            queryset = event_obj.event_participation.all()
        ser = ParticipantSerializer4(queryset, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["POST"])
@permission_classes([IsAdminUser])
def participantAttendance(request, participant_id):
    try:
        if not EventParticipantsModel.objects.filter(id=participant_id).exists():
            return Response({"message":"Invalid Participant ID"})
        participant_obj = EventParticipantsModel.objects.get(id=participant_id)
        participant_obj.has_attended = True
        participant_obj.save()
        return Response({"message": "Particpant Attendence Marked"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":str(e), "message":"Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
