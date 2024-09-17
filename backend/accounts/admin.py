from django.contrib import admin

from .models import Country, Address, UserInfo, UserImage


@admin.register(Country)
class AddressAdmin(admin.ModelAdmin):
    list_display = ['id', 'country_name']
    list_display_links = ['country_name']


@admin.register(Address)
class CountryAdmin(admin.ModelAdmin):
    list_display = ['id', 'street_address', 'city', 'country']
    list_display_links = ['id', 'city']


@admin.register(UserInfo)
class UserInfoAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'user']
    list_display_links = ['first_name', 'last_name']


@admin.register(UserImage)
class UserImage(admin.ModelAdmin):
    list_display = ['id', 'user']
    list_display_links = ['user']