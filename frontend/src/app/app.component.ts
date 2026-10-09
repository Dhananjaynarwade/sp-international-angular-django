import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import * as AOS from 'aos';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private api = 'http://127.0.0.1:8000/api';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    AOS.init({ duration: 850, once: true, offset: 80 });
    this.http.get<Product[]>(`${this.api}/products/`).subscribe({
      next: data => {
        if (data?.length) this.products = data;
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
