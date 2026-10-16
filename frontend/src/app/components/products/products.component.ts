import { Component, Input } from '@angular/core';

import { RouterLink } from '@angular/router';

interface Product {
  id?: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
}

@Component({
    selector: 'app-products',
    imports: [RouterLink],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {

  @Input() products: Product[] = [];

}