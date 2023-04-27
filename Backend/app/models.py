from django.db import models
from base.models import *


class CategoryModel(BaseModel):
    category_name = models.CharField(max_length=50)
    category_img = models.ImageField(upload_to="category", height_field=None, width_field=None, max_length=None)
    def __str__(self):
        return self.category_name
    class Meta:
        db_table = 'category'


class EventModel(BaseModel):
    event_name = models.CharField(max_length=50)
    description = models.TextField()
    category = models.ForeignKey(CategoryModel, related_name="event_category", on_delete=models.CASCADE)
    cover_image = models.ImageField(upload_to="event", height_field=None, width_field=None, max_length=None)
    rules = models.TextField()
    judging_criteria = models.TextField()
    no_of_participants = models.PositiveSmallIntegerField(default=1)
    def __str__(self):
        return self.event_name


class EventCoordinatorModel(BaseUser):
    event = models.OneToOneField(EventModel, related_name="event_coordinator", on_delete=models.PROTECT)
    def __str__(self):
        return self.email
    class Meta:
        db_table = 'event-coordinator'


class EventParticipantsModel(BaseModel):
    event = models.ForeignKey(EventModel, related_name="event_participation", on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    id_card = models.ImageField(upload_to="id_card", height_field=None, width_field=None, max_length=None)
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'participant'
