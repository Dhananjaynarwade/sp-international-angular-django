from rest_framework import generics
from .models import Product, QuoteRequest
from .serializers import ProductSerializer, QuoteRequestSerializer

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = ProductSerializer

class QuoteCreateView(generics.CreateAPIView):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer
