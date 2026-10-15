import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import * as AOS from 'aos';
import { Component, HostListener, OnInit } from '@angular/core';
interface Product {
  id?: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],  templateUrl: './app.component.html',
styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @HostListener('document:click', ['$event'])
closeMenuOutside(event: MouseEvent): void {
  if (!this.mobileMenuOpen) {
    return;
  }

  const target = event.target as Node;
  const navbar = document.querySelector('.navbar');

  if (navbar && !navbar.contains(target)) {
    this.mobileMenuOpen = false;
  }
}
  
  
navigateToSection(event: Event, sectionId: string): void {
  event.preventDefault();

  this.mobileMenuOpen = false;

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

  mobileMenuOpen = false;
  isProductDetailsPage = false;
private api = window.location.hostname === 'localhost' ||
              window.location.hostname === '127.0.0.1'
  ? 'http://127.0.0.1:8000/api'
  : 'https://spinternational-backend.onrender.com/api';

  // here we add new product here page 
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
},
{
  name: 'Bakery Industries',
  category: 'Bakery',
  description: 'Quality bakery ingredients and reliable sourcing solutions for commercial baking and food production.',
  image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
},
{
  name: 'Bakery Industries',
  category: 'Bakery',
  description: 'Quality bakery ingredients and reliable sourcing solutions for commercial baking and food production.',
  image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
}

  ];

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
constructor(
  private http: HttpClient,
  private router: Router
) {
  this.isProductDetailsPage =
    this.router.url.startsWith('/products/');

  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => {
      this.isProductDetailsPage =
        event.urlAfterRedirects.startsWith('/products/');
    });
}

  ngOnInit() {
    AOS.init({ duration: 850, once: true, offset: 80 });
    this.http.get<Product[]>(`${this.api}/products/`).subscribe({
      next: data => {
       if (data?.length) {

  const pharmaceutical = this.products.find(
    product => product.name === 'Pharmaceutical Industries'
  );

  this.products = [...data];

  if (
    pharmaceutical &&
    !this.products.some(
      product => product.name === 'Pharmaceutical Industries'
    )
  ) {
    this.products.push(pharmaceutical);
  }

}
      },
      error: () => {
        // Backend may not be running yet. Sample products remain visible.
      }
    });
  }

  submitQuote() {
    this.sending = true;
    this.sentMessage = '';

    this.http.post(`${this.api}/quotes/`, this.quote).subscribe({
      next: () => {
        this.sentMessage = 'Thank you. Your quotation request has been sent.';
        this.sending = false;
        this.quote = { name: '', company: '', email: '', phone: '', product: '', message: '' };
      },
      error: () => {
        this.sentMessage = 'Backend is not connected yet. Start Django and submit again.';
        this.sending = false;
      }
    });
  }
}
