
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface PharmaProduct {
  name: string;
  category: string;
  application: string;
  icon: string;
}

@Component({
    selector: 'app-pharmaceutical-industries',
    imports: [FormsModule, RouterLink],
    templateUrl: './pharmaceutical-industries.component.html',
    styleUrl: './pharmaceutical-industries.component.css'
})
export class PharmaceuticalIndustriesComponent {

  searchTerm = '';
  selectedCategory = 'All Products';

  categories: string[] = [
    'All Products',
    'Tablet Excipients',
    'Liquid Formulations',
    'Capsule Shells',
    'Pharmaceutical Packaging'
  ];

  products: PharmaProduct[] = [

    // TABLET EXCIPIENTS

    {
      name: 'Microcrystalline Cellulose (MCC 101/102)',
      category: 'Tablet Excipients',
      application: 'Tablet filler and binder',
      icon: '💊'
    },
    {
      name: 'Lactose Monohydrate',
      category: 'Tablet Excipients',
      application: 'Tablet and capsule filler',
      icon: '💊'
    },
    {
      name: 'Magnesium Stearate IP/BP/USP',
      category: 'Tablet Excipients',
      application: 'Tablet manufacturing lubricant',
      icon: '💊'
    },
    {
      name: 'HPMC (E5/E15/K4M)',
      category: 'Tablet Excipients',
      application: 'Tablet coating and controlled release',
      icon: '💊'
    },
    {
      name: 'Povidone PVP K30',
      category: 'Tablet Excipients',
      application: 'Tablet binder',
      icon: '💊'
    },
    {
      name: 'Sodium Starch Glycolate',
      category: 'Tablet Excipients',
      application: 'Tablet disintegrant',
      icon: '💊'
    },
    {
      name: 'Croscarmellose Sodium',
      category: 'Tablet Excipients',
      application: 'Tablet disintegrant',
      icon: '💊'
    },
    {
      name: 'Crospovidone',
      category: 'Tablet Excipients',
      application: 'Tablet disintegrant',
      icon: '💊'
    },
    {
      name: 'Colloidal Silicon Dioxide',
      category: 'Tablet Excipients',
      application: 'Powder flow improvement',
      icon: '💊'
    },
    {
      name: 'Dicalcium Phosphate',
      category: 'Tablet Excipients',
      application: 'Tablet filler',
      icon: '💊'
    },
    {
      name: 'Pharmaceutical Starch',
      category: 'Tablet Excipients',
      application: 'Tablet binding and disintegration',
      icon: '💊'
    },
    {
      name: 'Talc IP/BP/USP',
      category: 'Tablet Excipients',
      application: 'Tablet anti-adherent',
      icon: '💊'
    },

    // LIQUID FORMULATIONS

    {
      name: 'Glycerin IP',
      category: 'Liquid Formulations',
      application: 'Liquid pharmaceutical formulations',
      icon: '🧪'
    },
    {
      name: 'Propylene Glycol IP',
      category: 'Liquid Formulations',
      application: 'Pharmaceutical solvent and vehicle',
      icon: '🧪'
    },
    {
      name: 'Polyethylene Glycol (PEG)',
      category: 'Liquid Formulations',
      application: 'Pharmaceutical formulations',
      icon: '🧪'
    },
    {
      name: 'Polysorbate 80',
      category: 'Liquid Formulations',
      application: 'Solubilising agent',
      icon: '🧪'
    },
    {
      name: 'Sorbitol Solution 70%',
      category: 'Liquid Formulations',
      application: 'Liquid pharmaceutical formulations',
      icon: '🧪'
    },
    {
      name: 'Citric Acid, Pharmaceutical Grade',
      category: 'Liquid Formulations',
      application: 'pH adjustment in formulations',
      icon: '🧪'
    },
    {
      name: 'Sodium Benzoate, Pharmaceutical Grade',
      category: 'Liquid Formulations',
      application: 'Preservative in suitable formulations',
      icon: '🧪'
    },
    {
      name: 'Sodium Metabisulfite, Pharma Grade',
      category: 'Liquid Formulations',
      application: 'Antioxidant in suitable formulations',
      icon: '🧪'
    },

    // CAPSULE SHELLS

    {
      name: 'Empty Hard Gelatin Capsules',
      category: 'Capsule Shells',
      application: 'Capsule manufacturing',
      icon: '💊'
    },
    {
      name: 'HPMC Vegetarian Capsule Shells',
      category: 'Capsule Shells',
      application: 'Vegetarian capsule manufacturing',
      icon: '💊'
    },

    // PHARMACEUTICAL PACKAGING

    {
      name: 'Aluminium Blister Foil',
      category: 'Pharmaceutical Packaging',
      application: 'Tablet and capsule blister packaging',
      icon: '📦'
    },
    {
      name: 'PVC/PVDC Pharmaceutical Blister Film',
      category: 'Pharmaceutical Packaging',
      application: 'Tablet blister packaging',
      icon: '📦'
    },
    {
      name: 'Pharmaceutical HDPE Bottles',
      category: 'Pharmaceutical Packaging',
      application: 'Packaging for tablets, capsules and dry syrups',
      icon: '📦'
    }

  ];

  // SEARCH AND CATEGORY FILTER

  get filteredProducts(): PharmaProduct[] {

    const search = this.searchTerm
      .toLowerCase()
      .trim();

    return this.products.filter(product => {

      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.application.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All Products' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }

}
