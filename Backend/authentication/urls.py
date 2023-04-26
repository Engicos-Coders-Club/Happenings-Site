from django.urls import path
from . import views
from .views import *


urlpatterns = [
    
# College
	path('all-colleges/', views.AllCollegesView.as_view(), name="all-colleges"),
	path('college-points/', views.CollegePointsSerializer.as_view(), name="college-points"),
	path('college-registration/', views.college_registration, name="college-registration"),

# Seller Side Actions
    # path('seller-signup/', views.sellersignUp, name="admin-signup"),
	# path('seller-login/', views.sellerlogIn, name="admin-login"),
	# path('seller-login/otp/', views.sellerloginOTP, name="admin-login-otp"),
	# path('seller-forgot/', views.sellerforgot, name="admin-forgot"),
	# path('seller-reset/', views.sellerreset, name="admin-reset"),
	# path('seller-change-password/', views.sellerChangePassword, name="admin-change-password"),
	# path('seller-verify/', views.sellerVerify, name="admin-verify"),
	# path('seller-remove/', views.sellerRemove, name="admin-remove"),
	# path('seller-remove-confirm/<uid>/', views.sellerRemoveVerification, name="admin-remove-confirm"),
	# path('seller-list/', views.sellerList, name="seller-list"),

# Customer Side Actions
	path('google-auth/', views.google_authentication, name="google-auth"),
	path('signup/', views.signUp, name="signup"),
	path('login/', views.logIn, name="login"),
	path('forgot/', views.forgot, name="forgot"),
	path('reset/', views.reset, name="reset"),
	path('verify-jwt/', views.verify_jwt, name="verify-jwt"),

# Special Mail
	# path("seller-send-special-email/", views.specialEmail, name="seller-send-special-email"),
]