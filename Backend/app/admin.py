from django.contrib import admin
from .models import *


admin.site.register(EventModel)
admin.site.register(EventCoordinatorModel)
admin.site.register(EventParticipantsModel)
