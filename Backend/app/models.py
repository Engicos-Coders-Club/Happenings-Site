from django.db import models
from base.models import *
from authentication.models import UserModel


class CollegeModel(BaseModel):
    college_name = models.CharField(max_length=50, unique=True)
    icon = models.ImageField(upload_to="college", height_field=None, width_field=None, max_length=None, null=True, blank=True)
    points = models.IntegerField(default=0)
    gs_name = models.CharField(max_length=50)
    gs_number = models.CharField( max_length=14)
    cs_name = models.CharField(max_length=50)
    cs_number = models.CharField( max_length=14)
    is_paid = models.BooleanField(default=False)
    order_id = models.CharField(max_length=100, null=True, blank=True)
    payment_id = models.CharField(max_length=100, null=True, blank=True)
    payment_signature = models.CharField(max_length=100, null=True, blank=True)
    coordinator = models.OneToOneField(UserModel, related_name="college_coordinator", on_delete=models.CASCADE, null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    # all_registered = models.BooleanField(default=False)
    def __str__(self):
        return self.college_name
    class Meta:
        db_table = 'college'


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
    timing = models.DateTimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    venue = models.CharField(max_length=50, null=True, blank=True)
    no_of_participants = models.PositiveSmallIntegerField(default=1)
    def __str__(self):
        return self.event_name
    class Meta:
        db_table = 'event'


class EventCoordinatorModel(BaseModel):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=14)
    photo = models.ImageField(upload_to="coordinator", height_field=None, width_field=None, max_length=None)
    event = models.ForeignKey(EventModel, related_name="event_coordinator", on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'event-coordinator'


class EventParticipantsModel(BaseModel):
    event = models.ForeignKey(EventModel, related_name="event_participation", on_delete=models.CASCADE)
    college = models.ForeignKey(CollegeModel, related_name="college_participation", on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    id_card = models.ImageField(upload_to="id_card", height_field=None, width_field=None, max_length=None)
    def __str__(self):
        return self.name
    class Meta:
        db_table = 'participant'
