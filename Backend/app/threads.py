import threading
from django.conf import settings
from django.core.mail import send_mail

context = {}

class send_participants_excel(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
    def run(self):
        try:
            subject = "College Participants Excel"
            body = "College Participants Excel"
            send_mail(subject , body ,settings.EMAIL_HOST_USER ,["patharv777@gmail.com"])
        except Exception as e:
            print(e)
