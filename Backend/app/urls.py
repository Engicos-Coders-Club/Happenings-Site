from django.urls import path
from . import views
from .views import *


urlpatterns = [

    path('all-categories/', views.AllCategories.as_view(), name="all-categories"),
    path('all-events/', views.AllEvents.as_view(), name="all-events"),
    path('event/<id>/', views.SingleEvents.as_view(), name="single-event"),
    path('event-registration/<event_id>/', views.event_registration, name="event-registration"),

]
