
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router) {}

  // BACK TO TOP
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

  // EXPLORE PRODUCTS
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

}
