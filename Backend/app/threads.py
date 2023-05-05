import threading
from django.conf import settings
from django.core.mail import send_mail

context = {}

class send_notif(threading.Thread):
    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)
    def run(self):
        try:
            subject = "College Registration"
            body = "New College has registered"
            send_mail(subject , body ,settings.EMAIL_HOST_USER ,["patharv777@gmail.com", "urvigaundalkar@gmail.com "])
        except Exception as e:
            print(e)