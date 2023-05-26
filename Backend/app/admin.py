from django.contrib import admin
from .models import *

admin.site.register(CategoryModel)
admin.site.register(CollegeModel)


class EventCoordinatorModelAdmin(admin.StackedInline):
    model = EventCoordinatorModel

class EventModelAdmin(admin.ModelAdmin):
    inlines = [ EventCoordinatorModelAdmin ]

admin.site.register(EventModel, EventModelAdmin)


class ParticipantModelAdmin(admin.ModelAdmin):
    list_display = ["event", "college", "name"]

admin.site.register(EventParticipantsModel, ParticipantModelAdmin)
