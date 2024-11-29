from rest_framework.response import Response
from rest_framework.request import Request

from rest_framework.decorators import api_view
from .models import Category, Company, Brand
from .serializers import CategorySerializer, CompanySerializer, BrandSerializer


@api_view(['GET'])
def  category_view(request: Request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def  company_view(request: Request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def  brand_view(request: Request):
    brands = Brand.objects.all()
    serializer = BrandSerializer(brands, many=True)
    return Response(serializer.data)