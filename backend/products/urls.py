from django.urls import path

from .views import category_view, company_view, brand_view


urlpatterns = [
    path('category/', category_view, name='cateogry_view'),
    path('company/', company_view, name='company_view'),
    path('brand/', brand_view, name='brand_view'),
]
