import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private readonly router = inject(Router);

  // =========================================
  // BACK TO TOP
  // =========================================

  backToTop(): void {

    const path = this.router.url.split(/[?#]/)[0];

    if (path === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      this.router.navigateByUrl('/');
    }

  }

  // =========================================
  // EXPLORE PRODUCTS
  // =========================================

  exploreProducts(): void {

    const path = this.router.url.split(/[?#]/)[0];

    if (path === '/products') {
      document.getElementById('products')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      this.router.navigateByUrl('/products');
    }

  }

  // KEEP YOUR EXISTING API CODE BELOW

  private readonly api =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
      ? 'http://127.0.0.1:8000/api'
      : 'https://spinternational-backend.onrender.com/api';

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
  toastType: 'success' | 'error' | '' = '';

  constructor(private http: HttpClient) {
    
  }

  submitQuote(form: NgForm): void {
    if (this.sending || form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.sentMessage = '';
    this.toastType = '';

    this.http.post(`${this.api}/quotes/`, this.quote).subscribe({
      next: () => {
        this.sentMessage = 'Thank you. Your quotation request has been sent.';
        // this.toastType = 'success';
        this.sending = false;

        this.quote = {
          name: '',
          company: '',
          email: '',
          phone: '',
          product: '',
          message: ''
        };

        form.resetForm();

        setTimeout(() => {
          this.sentMessage = '';
          this.toastType = '';
        }, 4000);
      },

      error: () => {
        this.sentMessage =
          'Unable to send your request. Please try again or contact us by email.';
        this.toastType = 'error';
        this.sending = false;

        setTimeout(() => {
          this.sentMessage = '';
          this.toastType = '';
        }, 4000);
      }
    });
  }

  closeToast(): void {
    this.sentMessage = '';
    this.toastType = '';
  }
  
  
}