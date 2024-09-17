from django.db import models
from django.contrib.auth.models import AbstractUser


# Best practice to initialize Custom User 
class User(AbstractUser):
    first_name = None
    last_name = None

    def __str__(self) -> str:
        return self.username


class Country(models.Model):
    country_name = models.CharField(max_length=50)

    def __str__(self):
        return self.country_name
    

class Address(models.Model):
    street_address = models.CharField(max_length=200)
    apartment = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    region = models.CharField(max_length=100, null=True, blank=True)
    country = models.ForeignKey(Country, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.street_address} {self.city}"




class UserInfo(models.Model):
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female")
    ]

    first_name = models.CharField(max_length=150, null=True, blank=True)
    middle_name = models.CharField(max_length=150, null=True, blank=True)
    last_name = models.CharField(max_length=150, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=2, null=True, blank=True, choices=GENDER_CHOICES)
    phone = models.CharField(max_length=15, null=True, blank=True)
    address = models.ForeignKey(Address, null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.user} {self.first_name} {self.last_name}"


class UserImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="users")
    uploaded_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user}"
