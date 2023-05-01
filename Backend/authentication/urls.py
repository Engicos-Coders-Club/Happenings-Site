from django.urls import path
from . import views
from .views import *


urlpatterns = [

# Customer Side Actions
	path('google-auth/', views.google_authentication, name="google-auth"),

	path('signup/', views.signUp, name="signup"),
	path('login/', views.logIn, name="login"),
	path('forgot/', views.forgot, name="forgot"),
	path('reset/', views.reset, name="reset"),
	path('verify-jwt/', views.verify_jwt, name="verify-jwt"),

]