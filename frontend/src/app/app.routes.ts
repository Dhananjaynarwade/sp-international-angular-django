
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductDetailsComponent } from './pages/product-details/product-details.component';

import { FoodIngredientsComponent } from './pages/food-ingredients/food-ingredients.component';

import { PharmaceuticalIndustriesComponent } from './pages/pharmaceutical-industries/pharmaceutical-industries.component';
import { PackagingMaterialsComponent } from './pages/packaging-materials/packaging-materials.component';
import { BoatAnimationComponent } from './pages/boat-animation/boat-animation.component';

// Empty route component.
// Your homepage sections are already displayed by AppComponent.
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: ''
})
class HomeSectionRouteComponent {}

export const routes: Routes = [

  // Homepage
  {
    path: '',
    component: HomeSectionRouteComponent,
    pathMatch: 'full'
  },

  // About section
  {
    path: 'about',
    component: HomeSectionRouteComponent
  },

  // Products section
  {
    path: 'products',
    component: HomeSectionRouteComponent
  },

  // Industries section
  {
    path: 'industries',
    component: HomeSectionRouteComponent
  },

  // Contact section
  {
    path: 'contact',
    component: HomeSectionRouteComponent
  },

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
  },
  // Packaging Materials
{
  path: 'products/packaging-materials',
  component: PackagingMaterialsComponent
},
{
  path: 'boat-animation',
  component: BoatAnimationComponent
},

];
