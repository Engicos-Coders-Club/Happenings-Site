from django.db import models
from base.models import *


class CustomerModel(BaseUser):
    newsletter = models.BooleanField(default=True)
    def __str__(self):
        return self.email


# class SellerModel(BaseUser):
#     is_verified = models.BooleanField(default=False)
#     def save(self, *args, **kwargs):
#         self.is_staff = True
#         super(SellerModel, self).save(*args, **kwargs) 
#     def __str__(self):
#         return self.email

