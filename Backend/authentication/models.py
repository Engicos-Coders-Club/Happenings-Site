from base.models import *


class UserModel(BaseUser):
    def __str__(self):
        return self.email
    class Meta:
        db_table = 'user'
