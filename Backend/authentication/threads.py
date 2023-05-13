import threading, random
from django.conf import settings
from django.core.mail import send_mail
from django.core.cache import cache

context = {}

class send_login_otp(threading.Thread):
    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)
    def run(self):
        try:
            otp = random.randint(100001, 999999)
            cache.set(otp, self.email, 350)
            print(otp)
            subject = "OTP to login into your account"
            message = f"The OTP to log in into your email is {otp} \nIts valid only for 2 mins."
            email_from = settings.EMAIL_HOST_USER
            print(str(otp))
            send_mail(subject , message ,email_from ,[self.email])
        except Exception as e:
            print(e)


class send_forgot_link(threading.Thread):
    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)
    def run(self):
        try:
            otp = random.randint(100001, 999999)
            cache.set(otp, self.email, timeout=350)
            subject = "OTP to Reset your Happenings Account Password"
            message = f"Here's the OTP to reset your Account Password\n{otp}\nDon't share this with anyone. OTP is only valid for 5 minuts"
            email_from = settings.EMAIL_HOST_USER
            send_mail(subject , message ,email_from ,self.email_list)
            print(otp)
        except Exception as e:
                print(e)

