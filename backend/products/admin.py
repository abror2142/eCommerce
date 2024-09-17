from django.contrib import admin

from .models import Category, Vendor, Product, ProductCategory, ProductImage


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'category_name', 'parent']
    list_display_links = ['category_name']


@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'company_name']
    list_display_links = ['id', 'user']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_name', 'short_description']
    list_display_links = ['product_name']


@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'product', 'category']
    list_display_links = ['id']


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'product']
    list_display_links = ['product']