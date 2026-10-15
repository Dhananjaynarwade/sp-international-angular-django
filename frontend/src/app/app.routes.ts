import { Routes } from '@angular/router';

import { ProductDetailsComponent } from './pages/product-details/product-details.component';

import { FoodIngredientsComponent } from './pages/food-ingredients/food-ingredients.component';

import { PharmaceuticalIndustriesComponent } from './pages/pharmaceutical-industries/pharmaceutical-industries.component';

export const routes: Routes = [

  // Food Ingredients
  {
    path: 'products/food-ingredients',
    component: FoodIngredientsComponent
  },

  // Pharmaceutical Industries
  {
    path: 'products/pharmaceutical-industries',
    component: PharmaceuticalIndustriesComponent
  },

  // Industrial Chemicals
  {
    path: 'products/nutraceutical-ingredients',
    component: ProductDetailsComponent
  }

];