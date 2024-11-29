from django.urls import path

from .views import category_view


urlpatterns = [
    path('category/', category_view, name='cateogry-view'),
]
