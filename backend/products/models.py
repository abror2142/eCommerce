from django.db import models
from django.contrib.auth import get_user_model

from accounts.models import Address


User = get_user_model()


class Category(models.Model):
    category_name = models.CharField(max_length=100)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.category_name


class Vendor(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    company_name = models.CharField(max_length=150, null=True, blank=True)
    address = models.ForeignKey(Address, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.user


class Product(models.Model):
    product_name = models.CharField(max_length=150)
    short_description = models.CharField(max_length=255)
    full_description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=20, decimal_places=2)
    vendor = models.ForeignKey(Vendor, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.product_name


class ProductCategory(models.Model):
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.category}: {self.product}"


class ProductImage(models.Model):
    image = models.ImageField(upload_to="product")
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    uploaded_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product