from google.auth.transport import requests
from rest_framework import serializers
from google.oauth2 import id_token
from django.conf import settings
from .models import *


class loginSerializer(serializers.Serializer):
    email = serializers.EmailField(required = True)
    password = serializers.CharField(required = True)

class ChangePasswordSerializer(serializers.Serializer):
    old = serializers.CharField(required = True)
    new = serializers.CharField(required = True)

class signupSerializer(serializers.Serializer):
    name = serializers.CharField(required = True)
    email = serializers.EmailField(required = True)
    phone = serializers.CharField(required = False)
    password = serializers.CharField(required = True)

class otpSerializer(serializers.Serializer):
    otp = serializers.IntegerField(required = True)
    pw = serializers.CharField(required = False)

class emailSerializer(serializers.Serializer):
    email = serializers.EmailField(required = True)

# class CustomerNameSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomerModel
#         fields = ["name", "profile_pic"]

# class CustomerDetailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomerModel
#         fields = ["name", "email", "phone"]

class RemoveAdminSerializer(serializers.Serializer):
    text = serializers.CharField(required = True)
    otp = serializers.IntegerField(required = True)

# class SellerDisplaySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SellerModel
#         fields = ["name", "email", "phone", "is_verified"]

class SpecialEmailSerializer(serializers.Serializer):
    sub = serializers.CharField(required = True)
    body = serializers.CharField(required = True)


class GoogleSocialAuthSerializer(serializers.Serializer):
    token_id = serializers.CharField(required=True)
    def validate_token_id(self, token_id):
        try:
            idinfo = id_token.verify_oauth2_token(token_id, requests.Request(), settings.GOOGLE_CLIENT_ID)
            if (idinfo['iss']!='accounts.google.com'):
                raise serializers.ValidationError(
                    'The token is invalid or expired. Please login again.'
                )
            return token_id
        except Exception as e:
            print(e)
