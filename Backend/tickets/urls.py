from django.urls import path
from . import views
from .views import *


urlpatterns = [

    path('all-tickets/', views.GetTickets.as_view(), name="all-tickets"),

    path('buy-ticket/<ticket_id>/', views.buy_tickets, name="buy-ticket"),
    
    path('buy-ticket-result/<ticket_id>/', views.buy_tickets, name="buy-ticket"),

]
