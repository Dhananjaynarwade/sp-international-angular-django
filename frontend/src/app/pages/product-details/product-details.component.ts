
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ProductSection {
  title: string;
  description: string;
  color: string;
  products: string[];
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  categoryTitle = 'Industrial Chemicals';

  sections: ProductSection[] = [
    {
      title: 'Nutraceutical Ingredients',
      description: 'Premium ingredients for health, wellness and supplement formulations.',
      color: '#0ea5e9',
      products: [
        'D-Biotin (HPLC)',
        'Vitamin E Acetate 98%',
        'Natural Caffeine Extract 99%',
        'Bromelain Powder (600/1200/2400 GDU/g)',
        'Nano Curcumin Extract 20% (HPLC)',
        'Tetrahydro Curcumin',
        'Inositol',
        'Rutin',
        'MCT Oil 60:40'
      ]
    },
    {
      title: 'Herbal Extracts',
      description: 'Standardized botanical extracts for wellness and nutraceutical applications.',
      color: '#10b981',
      products: [
        'Turmeric Extract',
        'Ashwagandha Extract',
        'Shatavari Extract',
        'Boswellia Extract',
        'Milk Thistle Extract',
        'Green Tea Extract',
        'Ginseng Extract',
        'Ginkgo Biloba Extract',
        'Cinnamon Extract',
        'Garcinia Cambogia Extract',
        'Bacopa Monnieri Extract',
        'Amla Extract',
        'Moringa Extract',
        'Neem Extract',
        'Licorice Extract'
      ]
    },
    {
      title: 'Essential Oils & Botanical Oils',
      description: 'Natural oils for food, cosmetics, pharmaceuticals, personal care and aromatherapy.',
      color: '#eab308',
      products: [
        'Clove Oil',
        'Peppermint Oil',
        'Eucalyptus Oil',
        'Tea Tree Oil',
        'Rosemary Oil',
        'Cinnamon Bark Oil',
        'Ginger Oil',
        'Lavender Oil',
        'Citronella Oil',
        'Almond Oil',
        'Avocado Oil',
        'Argan Oil',
        'Jojoba Oil',
        'Olive Oil',
        'Neem Oil',
        'Castor Oil',
        'Orange Oil',
        'MCT Oil'
      ]
    },
    {
      title: 'Cosmetic & Personal Care Ingredients',
      description: 'Raw materials for cosmetics, personal care, skincare and beauty products.',
      color: '#ec4899',
      products: [
        'Aloe Vera Gel',
        'Cocoa Butter',
        'Shea Butter',
        'Hyaluronic Acid',
        'Niacinamide',
        'Vitamin E',
        'Glycerin',
        'Ceramide',
        'Cosmetic Grade Oils'
      ]
    }
  ];

  sourcingServices: string[] = [
    'Global Vendor Identification',
    'Product Procurement',
    'Quality Assurance',
    'Exclusive Sourcing',
    'Competitive Pricing',
    'Long-Term Procurement Partnerships'
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');

      if (category === 'nutraceutical-ingredients') {
        this.categoryTitle = 'Industrial Chemicals';
      }
    });
  }
}
