from django.contrib import admin
from .models import Product, QuoteRequest

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'is_active', 'created_at')
    list_filter = ('category', 'is_active')
    search_fields = ('name', 'category')

@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'email', 'phone', 'product', 'created_at')
    search_fields = ('name', 'company', 'email', 'phone', 'product')
    readonly_fields = ('created_at',)
