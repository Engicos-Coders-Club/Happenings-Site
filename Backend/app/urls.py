from django.urls import path
from . import views
from .views import *


urlpatterns = [

# Coordinators Team Page
    path('get-coordinators/', views.CoordinatorsTeamsPage.as_view(), name="get-coordinators"),

# College Registration
	path('college-registration/', views.college_registration, name="college-registration"),

# Categories
    path('all-categories/', views.AllCategories.as_view(), name="all-categories"),

# Events
    path('all-events/', views.AllEvents.as_view(), name="all-events"),
    path('event/<id>/', views.SingleEvents.as_view(), name="single-event"),
    path('events-by-category/', views.EventsByCategoryView.as_view(), name="events-by-category"),
    
# Event Registration
    path('check-if-coordinator/', views.check_if_coordinator, name="check-if-coordinator"),
    path('college-participants/', views.all_participants, name="college-participants"),
    path('event-registration/<event_id>/', views.event_registration, name="event-registration"),
    path('view-registration-status/', views.view_registration_status, name="view-registration-status"),
    path('view-event-participants/<event_id>/', views.view_individual_event_participants, name="view-event-participants"),
    path('update-participant-details/<participant_id>/', views.update_individual_event_participants, name="update-participant-details"),
    path('delete-participant/<participant_id>/', views.delete_participant_details, name="delete-participant"),

# Admin
    path('get-colleges/', views.GetColleges.as_view(), name="get-colleges"),
    path('get-participants-by-college/<college_id>/', views.get_participants_by_college, name="get-participants-by-college"),
    path('get-participants-by-event/<event_id>/', views.get_participants_by_event, name="get-participants-by-event"),
    path('participant-attendence/<participant_id>/', views.participantAttendance, name="participant-attendence"),

]
