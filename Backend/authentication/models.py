from django.db import models
from base.models import *


class UserModel(BaseUser):
    def __str__(self):
        return self.email
    class Meta:
        db_table = 'user'


class CollegeModel(BaseModel):
    college_name = models.CharField(max_length=50, unique=True)
    icon = models.ImageField(upload_to="college", height_field=None, width_field=None, max_length=None)
    points = models.IntegerField(default=0)
    is_verified = models.BooleanField(default=False)
    coordinator = models.OneToOneField(UserModel, related_name="college_coordinator", on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self):
        return self.college_name
    class Meta:
        db_table = 'college'

