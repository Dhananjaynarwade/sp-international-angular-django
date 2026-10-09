from django.core.management.base import BaseCommand
from core.models import Product

PRODUCTS = [
    {
        'name': 'Industrial Chemicals',
        'category': 'Chemicals',
        'description': 'Reliable sourcing for industrial and manufacturing applications.',
        'image_url': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80'
    },
    {
        'name': 'Food Ingredients',
        'category': 'Food',
        'description': 'Quality ingredients for food processing and commercial production.',
        'image_url': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
    },
    {
        'name': 'Packaging Materials',
        'category': 'Packaging',
        'description': 'Commercial packaging solutions for supply and export operations.',
        'image_url': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80'
    },
]

class Command(BaseCommand):
    help = 'Create sample products'

    def handle(self, *args, **kwargs):
        for item in PRODUCTS:
            Product.objects.get_or_create(name=item['name'], defaults=item)
        self.stdout.write(self.style.SUCCESS('Sample products created.'))
