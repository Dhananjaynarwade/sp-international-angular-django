import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';

import {
  Router,
  RouterOutlet,
  RouterLink,
  NavigationEnd,
} from '@angular/router';

import { filter } from 'rxjs';
import * as AOS from 'aos';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodIngredientsComponent } from './pages/food-ingredients/food-ingredients.component';


/* =========================================
   PRODUCT INTERFACE
========================================= */

interface Product {
  id?: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
}

/* =========================================
   APP COMPONENT
========================================= */

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    IndustriesComponent,
    ProductsComponent,
    WhyChooseUsComponent,
    ContactComponent,
    FooterComponent,
    FoodIngredientsComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  /* PRODUCT PAGE VISIBILITY */

  isProductDetailsPage = false;

  /* DJANGO API */

  private api =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
      ? 'http://127.0.0.1:8000/api'
      : 'https://spinternational-backend.onrender.com/api';

  /* =========================================
     PRODUCTS
  ========================================= */

  products: Product[] = [

    {
      name: 'Industrial Chemicals',
      category: 'Chemicals',
      description: 'Reliable sourcing for industrial and manufacturing applications.',
      image_url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80'
    },

    {
      name: 'Food Ingredients',
      category: 'Food',
      description: 'Quality ingredients for food processing and commercial production.',
      image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
    },

    {
      name: 'Packaging Materials',
      category: 'Packaging',
      description: 'Commercial packaging solutions for supply and export operations.',
      image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80'
    },

    {
      name: 'Pharmaceutical Industries',
      category: 'Pharmaceutical',
      description: 'Quality pharmaceutical ingredients and reliable sourcing solutions for healthcare applications.',
      image_url: 'https://images.unsplash.com/photo-1763142843470-9a9e9db7f68f?auto=format&fit=crop&w=900&q=80'
    },

    {
      name: 'Bakery Industries',
      category: 'Bakery',
      description: 'Quality bakery ingredients and reliable sourcing solutions for commercial baking and food production.',
      image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
    }

  ];

  /* =========================================
     QUOTATION FORM
  ========================================= */

  quote = {
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  };

  sending = false;
  sentMessage = '';

  /* =========================================
     CONSTRUCTOR
  ========================================= */

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.isProductDetailsPage =
      this.router.url.startsWith('/products/');

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {

        this.isProductDetailsPage =
          event.urlAfterRedirects.startsWith('/products/');

      });

  }

  /* =========================================
     INITIALIZATION
  ========================================= */

  ngOnInit(): void {

    AOS.init({
      duration: 850,
      once: true,
      offset: 80
    });

    /* LOAD PRODUCTS FROM DJANGO */

    this.http.get<Product[]>(`${this.api}/products/`)
      .subscribe({

        next: (data) => {

          if (data?.length) {

            const allProducts = [
              ...data,
              ...this.products
            ];

            /* REMOVE DUPLICATE PRODUCT NAMES */

            this.products = allProducts.filter(
              (product, index, array) =>
                index === array.findIndex(
                  item =>
                    item.name.trim().toLowerCase() ===
                    product.name.trim().toLowerCase()
                )
            );

          }

        },

        error: () => {
          // Keep local products when Django is unavailable.
        }

      });

  }

  /* =========================================
     SUBMIT QUOTATION
  ========================================= */

  submitQuote(): void {

    this.sending = true;
    this.sentMessage = '';

    this.http.post(
      `${this.api}/quotes/`,
      this.quote
    ).subscribe({

      next: () => {

        this.sentMessage =
          'Thank you. Your quotation request has been sent.';

        this.sending = false;

        this.quote = {
          name: '',
          company: '',
          email: '',
          phone: '',
          product: '',
          message: ''
        };

      },

      error: () => {

        this.sentMessage =
          'Backend is not connected yet. Start Django and submit again.';

        this.sending = false;

      }

    });

  }

}