from django.urls import path
from .views import ProductListView, QuoteCreateView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='products'),
    path('quotes/', QuoteCreateView.as_view(), name='quotes'),
]
