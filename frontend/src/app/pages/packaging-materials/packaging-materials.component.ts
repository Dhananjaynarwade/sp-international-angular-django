
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface PackagingProduct {
  name: string;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-packaging-materials',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './packaging-materials.component.html',
  styleUrl: './packaging-materials.component.css'
})
export class PackagingMaterialsComponent {

  searchTerm: string = '';

  selectedCategory: string = 'All Products';

  categories: string[] = [
    'All Products',
    'Boxes',
    'Paper',
    'Tapes & Films',
    'Protection',
    'Bags',
    'Strapping & Pallets',
    'Labels'
  ];

  products: PackagingProduct[] = [

    // CORRUGATED BOXES

    {
      name: '3-Ply Corrugated Boxes',
      category: 'Boxes',
      icon: '📦'
    },
    {
      name: '5-Ply Corrugated Boxes',
      category: 'Boxes',
      icon: '📦'
    },
    {
      name: '7-Ply Corrugated Boxes',
      category: 'Boxes',
      icon: '📦'
    },
    {
      name: 'Printed Corrugated Boxes',
      category: 'Boxes',
      icon: '📦'
    },
    {
      name: 'Die-Cut Packaging Boxes',
      category: 'Boxes',
      icon: '📦'
    },

    // PAPER MATERIALS

    {
      name: 'Kraft Paper Rolls',
      category: 'Paper',
      icon: '📜'
    },
    {
      name: 'Corrugated Paper Rolls',
      category: 'Paper',
      icon: '📜'
    },

    // PACKAGING TAPES AND FILMS

    {
      name: 'Transparent BOPP Packing Tape',
      category: 'Tapes & Films',
      icon: '🧻'
    },
    {
      name: 'Brown BOPP Packing Tape',
      category: 'Tapes & Films',
      icon: '🧻'
    },
    {
      name: 'Custom Printed Packing Tape',
      category: 'Tapes & Films',
      icon: '🧻'
    },
    {
      name: 'Hand Stretch Film Rolls',
      category: 'Tapes & Films',
      icon: '🧻'
    },
    {
      name: 'Machine Stretch Film Rolls',
      category: 'Tapes & Films',
      icon: '🧻'
    },

    // PROTECTIVE PACKAGING

    {
      name: 'Bubble Wrap Rolls',
      category: 'Protection',
      icon: '🫧'
    },
    {
      name: 'EPE Foam Sheets',
      category: 'Protection',
      icon: '🛡️'
    },
    {
      name: 'Honeycomb Paper Wrap',
      category: 'Protection',
      icon: '📜'
    },
    {
      name: 'Air Cushion Packaging',
      category: 'Protection',
      icon: '🫧'
    },

    // PACKAGING BAGS

    {
      name: 'Courier Poly Mailer Bags',
      category: 'Bags',
      icon: '✉️'
    },
    {
      name: 'LDPE Packaging Bags',
      category: 'Bags',
      icon: '✉️'
    },

    // STRAPPING AND PALLETS

    {
      name: 'PP Strapping Rolls',
      category: 'Strapping & Pallets',
      icon: '🔗'
    },
    {
      name: 'PET Strapping Rolls',
      category: 'Strapping & Pallets',
      icon: '🔗'
    },
    {
      name: 'Plastic Edge Protectors',
      category: 'Strapping & Pallets',
      icon: '🛡️'
    },
    {
      name: 'Wooden Shipping Pallets',
      category: 'Strapping & Pallets',
      icon: '🪵'
    },
    {
      name: 'Plastic Shipping Pallets',
      category: 'Strapping & Pallets',
      icon: '🚚'
    },

    // SHIPPING LABELS

    {
      name: 'Barcode and Shipping Labels',
      category: 'Labels',
      icon: '🏷️'
    },
    {
      name: 'Packing List Envelopes',
      category: 'Labels',
      icon: '📋'
    }

  ];

  // SEARCH AND CATEGORY FILTER

  get filteredProducts(): PackagingProduct[] {

    const search = this.searchTerm
      .toLowerCase()
      .trim();

    return this.products.filter(product => {

      const matchesSearch =
        product.name.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All Products' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }

}
