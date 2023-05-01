from django.contrib import admin
from .models import *

admin.site.register(CategoryModel)
admin.site.register(EventModel)
admin.site.register(CollegeModel)
admin.site.register(EventCoordinatorModel)
admin.site.register(EventParticipantsModel)
