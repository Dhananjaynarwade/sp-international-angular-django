import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// =========================================
// PHARMACEUTICAL PRODUCT INTERFACE
// =========================================

interface PharmaceuticalProduct {
  name: string;
  description: string;
  applications: string;
  image: string;
}

@Component({
  selector: 'app-pharmaceutical-industries',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './pharmaceutical-industries.component.html',
  styleUrl: './pharmaceutical-industries.component.css'
})

export class PharmaceuticalIndustriesComponent {

  // =========================================
  // PAGE TITLE
  // =========================================

  pageTitle = 'Pharmaceutical Industries';

  // =========================================
  // SEARCH
  // =========================================

  searchText = '';

  // =========================================
  // PHARMACEUTICAL PRODUCTS
  // =========================================

  // We will add your actual pharmaceutical
  // product names here.

  products: PharmaceuticalProduct[] = [];

  // =========================================
  // SEARCH PRODUCTS
  // =========================================

  get filteredProducts(): PharmaceuticalProduct[] {

    const search = this.searchText.trim().toLowerCase();

    if (!search) {
      return this.products;
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.applications.toLowerCase().includes(search)
    );

  }

  // =========================================
  // PRODUCT IMAGE PATH
  // =========================================

  getProductImage(product: PharmaceuticalProduct): string {

    return '/images/pharmaceutical-industries/' + product.image;

  }

  // =========================================
  // IMAGE ERROR
  // =========================================

  onImageError(event: Event): void {

    const image = event.target as HTMLImageElement;

    image.style.display = 'none';

  }

  // =========================================
  // REQUEST DATASHEET VIA GMAIL
  // =========================================

  getDatasheetGmail(productName: string): string {

    const email = 'SPINTERNATIONAL42@gmail.com';

    const subject = `Datasheet Request - ${productName}`;

    const body =
      `Hello S-P International,\n\n` +
      `I would like to request the technical datasheet for ${productName}.\n\n` +
      `Please share the product specifications and available grades.\n\n` +
      `Thank you.`;

    return (
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
    );

  }

}