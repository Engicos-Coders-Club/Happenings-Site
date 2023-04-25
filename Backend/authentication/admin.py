from django.contrib import admin
from .models import *

# Seller Model
# class AdminUserAdmin(admin.ModelAdmin):
#     list_display = ["name", 'email', 'is_verified']
# admin.site.register(SellerModel, AdminUserAdmin)

# Customer Model
class UserAdmin(admin.ModelAdmin):
    list_display = ["name", 'email', 'auth_provider']
admin.site.register(CustomerModel, UserAdmin)
