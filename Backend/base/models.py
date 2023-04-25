from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .validators import validate_name
from .manager import UserManager
from django.db import models
import uuid

AUTH_PROVIDERS = (("email","email"),("google","google"))


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        abstract = True

class BaseUser(AbstractBaseUser, PermissionsMixin, BaseModel):
    email = models.EmailField(max_length=100, unique=True)
    name = models.CharField(max_length=100, validators=[validate_name])
    phone = models.CharField(max_length=13, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    auth_provider = models.CharField(choices=AUTH_PROVIDERS, max_length=7, default=AUTH_PROVIDERS[0], blank=False, null=False)
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()
    def __str__(self):
        return self.email
