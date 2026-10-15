import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface FoodProduct {
  name: string;
  description: string;
  applications: string;
  image: string;
}

@Component({
  selector: 'app-food-ingredients',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './food-ingredients.component.html',
  styleUrl: './food-ingredients.component.css'
})
export class FoodIngredientsComponent {

  // =========================================
  // SEARCH
  // =========================================

  searchText = '';

  // =========================================
  // FOOD INGREDIENTS - 20 PRODUCTS
  // =========================================

  products: FoodProduct[] = [

    {
      name: 'Citric Acid',
      description: 'Widely used acidulant and pH regulator.',
      applications: 'Beverages, confectionery and food processing.',
      image: 'citric-acid.png'
    },

    {
      name: 'Guar Gum',
      description: 'Natural plant-derived thickening and stabilizing ingredient.',
      applications: 'Sauces, bakery, dairy and food formulations.',
      image: 'guar-gum.jpg'
    },

    {
      name: 'Ascorbic Acid',
      description: 'Vitamin C ingredient used for antioxidant functions and fortification.',
      applications: 'Beverages, food products and nutritional supplements.',
      image: 'ascorbic-acid.png'
    },

    {
      name: 'MSG',
      description: 'Monosodium glutamate used as an umami flavour enhancer.',
      applications: 'Seasonings, snacks, soups and savoury foods.',
      image: 'msg.png'
    },

    {
      name: 'Xanthan Gum',
      description: 'Versatile thickening and stabilizing ingredient.',
      applications: 'Sauces, dressings, beverages and gluten-free foods.',
      image: 'xanthan-gum.png'
    },

    {
      name: 'Sodium Benzoate',
      description: 'Preservative for suitable acidic food formulations.',
      applications: 'Beverages, sauces and processed food products.',
      image: 'sodium-benzoate.jpg'
    },

    {
      name: 'Potassium Sorbate',
      description: 'Preservative used to help control yeast and mould growth.',
      applications: 'Bakery, beverages and dairy formulations.',
      image: 'potassium-sorbate.jpg'
    },

    {
      name: 'Sucralose',
      description: 'High-intensity sweetener for reduced-sugar products.',
      applications: 'Beverages, confectionery and sweetener blends.',
      image: 'sucralose.jpg'
    },

    {
      name: 'Vitamin B12',
      description: 'Essential vitamin ingredient for nutritional fortification.',
      applications: 'Fortified foods and nutritional supplements.',
      image: 'vitamin-b12.jpg'
    },

    {
      name: 'Sorbitol',
      description: 'Polyol used for sweetness and moisture retention.',
      applications: 'Confectionery, sugar-free products and food processing.',
      image: 'sorbitol.jpg'
    },

    {
      name: 'Natural Caffeine Extract 99%',
      description: 'Concentrated caffeine ingredient from natural sources.',
      applications: 'Energy beverages and nutritional formulations.',
      image: 'natural-caffeine-extract.jpg'
    },

    {
      name: 'Bromelain Powder (600/1200/2400 GDU/g)',
      description: 'Pineapple-derived enzyme available in different activity grades.',
      applications: 'Enzyme preparations and selected food-processing uses.',
      image: 'bromelain-powder.jpg'
    },

    {
      name: 'Curcumin Extract 20% (HPLC)',
      description: 'Turmeric-derived extract standardized for curcuminoid content.',
      applications: 'Botanical and nutraceutical formulations.',
      image: 'curcumin-extract.jpg'
    },

    {
      name: 'Acerola Fruit Spray Dried Powder',
      description: 'Spray-dried acerola fruit ingredient.',
      applications: 'Beverage mixes, nutritional blends and food products.',
      image: 'acerola-fruit-powder.jpg'
    },

    {
      name: 'Aerosil® (Fumed Silica)',
      description: 'Fine silica material used for flow control and anti-caking.',
      applications: 'Grade-dependent industrial and specialty formulations.',
      image: 'aerosil-fumed-silica.jpg'
    },

    {
      name: 'Almond Milk Powder',
      description: 'Powdered almond-based ingredient for plant-based products.',
      applications: 'Dairy alternatives, bakery and beverages.',
      image: 'almond-milk-powder.jpg'
    },

    {
      name: 'Aloe Vera Juice Spray Dried Powder',
      description: 'Concentrated spray-dried aloe vera juice ingredient.',
      applications: 'Suitable beverages and wellness formulations.',
      image: 'aloe-vera-powder.jpg'
    },

    {
      name: 'Amla Fruit Spray Dried Powder',
      description: 'Spray-dried Indian gooseberry fruit powder.',
      applications: 'Beverage mixes, botanical blends and nutritional products.',
      image: 'amla-fruit-powder.jpg'
    },

    {
      name: 'Amylase',
      description: 'Enzyme used to support the breakdown of starch.',
      applications: 'Baking and food-processing applications.',
      image: 'amylase.jpg'
    },

    {
      name: 'Apple Cider Vinegar Powder',
      description: 'Convenient powdered form of apple cider vinegar.',
      applications: 'Seasonings, dry mixes and supplement formulations.',
      image: 'apple-cider-vinegar-powder.jpg'
    }

  ];

  // =========================================
  // FILTER PRODUCTS USING SEARCH
  // =========================================

  get filteredProducts(): FoodProduct[] {

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

  getProductImage(product: FoodProduct): string {
    return '/images/food-ingredients/' + product.image;
  }
  onImageError(event: Event): void {
  const image = event.target as HTMLImageElement;
  image.style.display = 'none';
}
// =========================================
// PRODUCT DATASHEET EMAIL REQUEST
// =========================================

// getDatasheetMailto(productName: string): string {

//   const email = 'SPINTERNATIONAL42@gmail.com';

//   const subject = `Datasheet Request - ${productName}`;

//   const body =
//     `Hello S-P International,\n\n` +
//     `I would like to request the technical datasheet for ${productName}.\n\n` +
//     `Please share the product specifications and available grades.\n\n` +
//     `Thank you.`;

//   return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
// }
getDatasheetGmail(productName: string): string {
  const email = 'SPINTERNATIONAL42@gmail.com';

  const subject = `Datasheet Request - ${productName}`;

  const body =
    `Hello S-P International,\n\n` +
    `I would like to request the technical datasheet for ${productName}.\n\n` +
    `Please share the product specifications and available grades.\n\n` +
    `Thank you.`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

}