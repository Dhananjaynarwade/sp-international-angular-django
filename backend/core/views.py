from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics

from .models import Product, QuoteRequest
from .serializers import ProductSerializer, QuoteRequestSerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.filter(
        is_active=True
    ).order_by('-created_at')

    serializer_class = ProductSerializer


class QuoteCreateView(generics.CreateAPIView):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer

    def perform_create(self, serializer):
        quote = serializer.save()

        subject = f"New Quotation Request - {quote.name}"

        message = (
            f"Name: {quote.name}\n"
            f"Company: {quote.company}\n"
            f"Email: {quote.email}\n"
            f"Phone: {quote.phone}\n"
            f"Product: {quote.product}\n\n"
            f"Message:\n{quote.message}"
        )

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['SPINTERNATIONAL42@gmail.com'],
            fail_silently=False,
        )