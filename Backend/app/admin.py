from django.contrib import admin
from .models import *

admin.site.register(CategoryModel)
admin.site.register(CollegeModel)
admin.site.register(EventParticipantsModel)


class EventCoordinatorModelAdmin(admin.StackedInline):
    model = EventCoordinatorModel

class EventModelAdmin(admin.ModelAdmin):
    inlines = [ EventCoordinatorModelAdmin ]
    # list_display = ["name", "price", "ratings"]

admin.site.register(EventModel, EventModelAdmin)
