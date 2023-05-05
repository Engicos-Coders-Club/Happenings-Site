from django.db import models
from authentication.models import *


class TicketModel(BaseModel):
    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to="ticket", height_field=None, width_field=None, max_length=None)
    price = models.PositiveIntegerField(default=200)
    is_active = models.BooleanField(default=False)
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'tickets'


class PassesModel(BaseModel):
    user = models.ForeignKey(UserModel, related_name="user_pass", on_delete=models.CASCADE)
    ticket = models.ForeignKey(TicketModel, related_name="buy_ticket", on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=1)
    is_paid = models.BooleanField(default=False)
    order_id = models.CharField(max_length=100, null=True, blank=True)
    payment_id = models.CharField(max_length=100, null=True, blank=True)
    payment_signature = models.CharField(max_length=100, null=True, blank=True)
    def __str__(self):
        return self.user.name
    class Meta:
        db_table = 'passes'
