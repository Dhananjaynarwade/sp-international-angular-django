import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './contact.component.css'
})
export class ContactComponent {

  /* DJANGO API CONNECTION */

  private readonly api =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
      ? 'http://127.0.0.1:8000/api'
      : 'https://spinternational-backend.onrender.com/api';

  /* QUOTATION FORM */

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

  /* SUBMIT QUOTATION */

  submitQuote(): void {

    if (this.sending) {
      return;
    }

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
          'Unable to send your request. Please try again or contact us by email.';

        this.sending = false;
      }

    });
  }
}