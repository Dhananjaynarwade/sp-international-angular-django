
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Chemical {
  name: string;
  application: string;
}

interface PackagingProduct extends Chemical {
  category: string;
  icon: string;
}

interface ChemicalGroup {
  category: string;
  icon: string;
  items: Chemical[];
}

@Component({
  selector: 'app-packaging-materials',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './packaging-materials.component.html',
  styleUrl: './packaging-materials.component.css'
})
export class PackagingMaterialsComponent {

  searchTerm = '';
  selectedCategory = 'All Products';

  groups: ChemicalGroup[] = [

    // 1. PAPER AND CORRUGATED PACKAGING

    {
      category: 'Paper & Corrugated',
      icon: '📦',
      items: [
        { name: 'Starch (Native, Cationic, Oxidized)', application: 'Paper strength and corrugated board adhesives' },
        { name: 'Polyvinyl Alcohol (PVA)', application: 'Paper coating and adhesive formulations' },
        { name: 'Sodium Silicate', application: 'Paperboard bonding and industrial adhesives' },
        { name: 'Carboxymethyl Cellulose (CMC)', application: 'Thickening and paper coating formulations' },
        { name: 'Styrene Acrylic Emulsion', application: 'Paper coatings and surface treatment' },
        { name: 'Polyacrylamide (PAM)', application: 'Paper manufacturing and process aids' },
        { name: 'Calcium Carbonate', application: 'Paper filler and coating pigment' },
        { name: 'Optical Brightening Agents (OBA)', application: 'Paper brightness enhancement' },
        { name: 'Defoamers and Wetting Agents', application: 'Foam control and surface wetting' }
      ]
    },

    // 2. FLEXIBLE PACKAGING AND LAMINATION

    {
      category: 'Flexible Packaging',
      icon: '🧪',
      items: [
        { name: 'Polyurethane (PU) Adhesive Resin', application: 'Flexible packaging lamination' },
        { name: 'PU Adhesive Hardener / Isocyanate', application: 'Curing component for selected PU adhesives' },
        { name: 'Ethyl Acetate', application: 'Solvent for packaging inks and adhesives' },
        { name: 'Methyl Ethyl Ketone (MEK)', application: 'Industrial solvent for selected formulations' },
        { name: 'Toluene', application: 'Solvent for industrial inks and adhesives' },
        { name: 'Isopropyl Alcohol (IPA)', application: 'Solvent and printing process applications' },
        { name: 'Nitrocellulose', application: 'Binder for selected packaging inks' },
        { name: 'Polyester Resin', application: 'Flexible packaging coatings and inks' },
        { name: 'Polyethyleneimine (PEI)', application: 'Adhesion promotion and surface treatment' },
        { name: 'Silane Coupling Agents', application: 'Adhesion promotion in specialty formulations' }
      ]
    },

    // 3. HOT-MELT ADHESIVES

    {
      category: 'Hot-Melt Adhesives',
      icon: '🧴',
      items: [
        { name: 'Ethylene Vinyl Acetate (EVA)', application: 'Hot-melt packaging adhesives' },
        { name: 'Metallocene Polyolefin (mPO)', application: 'Hot-melt adhesive formulations' },
        { name: 'Amorphous Poly Alpha Olefin (APAO)', application: 'Hot-melt bonding applications' },
        { name: 'Hydrogenated Hydrocarbon Resin', application: 'Tackifier for hot-melt adhesives' },
        { name: 'C5 Hydrocarbon Resin', application: 'Adhesive tackification' },
        { name: 'C9 Hydrocarbon Resin', application: 'Adhesive and coating formulations' },
        { name: 'Rosin Ester Tackifier', application: 'Tackifier for adhesive systems' },
        { name: 'Paraffin Wax', application: 'Viscosity and processing modification' },
        { name: 'Microcrystalline Wax', application: 'Hot-melt formulation modification' },
        { name: 'Fischer–Tropsch Wax', application: 'Hot-melt processing and viscosity control' }
      ]
    },

    // 4. LABELS, TAPES AND PRESSURE-SENSITIVE ADHESIVES

    {
      category: 'Labels & Tapes',
      icon: '🏷️',
      items: [
        { name: 'Acrylic Polymer Emulsion', application: 'Water-based pressure-sensitive adhesives' },
        { name: 'Acrylic Copolymer', application: 'Label and tape adhesive formulations' },
        { name: 'Styrene Butadiene Rubber (SBR) Latex', application: 'Adhesive and coating applications' },
        { name: 'Natural Rubber Latex', application: 'Rubber-based adhesive formulations' },
        { name: 'SIS (Styrene-Isoprene-Styrene)', application: 'Pressure-sensitive adhesive formulations' },
        { name: 'SBS (Styrene-Butadiene-Styrene)', application: 'Rubber-based adhesives' },
        { name: 'Tackifier Resins', application: 'Improving adhesive tack' },
        { name: 'Zinc Oxide', application: 'Selected rubber adhesive systems' },
        { name: 'Antioxidants', application: 'Formulation stability' },
        { name: 'Crosslinking Agents', application: 'Adhesive curing and performance modification' }
      ]
    },

    // 5. ADHESIVE MANUFACTURING CHEMICALS

    {
      category: 'Adhesive Manufacturing',
      icon: '⚗️',
      items: [
        { name: 'Epoxy Resin', application: 'Industrial and structural adhesives' },
        { name: 'Polyamide Resin', application: 'Packaging inks, coatings and adhesives' },
        { name: 'Polyvinyl Acetate (PVAc)', application: 'Paper, carton and woodworking adhesives' },
        { name: 'Vinyl Acetate Ethylene (VAE)', application: 'Paper converting and water-based adhesives' },
        { name: 'Ethylene Vinyl Acetate (EVA)', application: 'Hot-melt adhesive manufacturing' },
        { name: 'Polyurethane Resin', application: 'Flexible packaging lamination adhesives' },
        { name: 'Acrylic Acid', application: 'Acrylic polymer and adhesive manufacturing' },
        { name: 'Butyl Acrylate', application: 'Acrylic adhesive manufacturing' },
        { name: '2-Ethylhexyl Acrylate (2-EHA)', application: 'Pressure-sensitive adhesive manufacturing' },
        { name: 'Methyl Methacrylate (MMA)', application: 'Acrylic polymers and specialty adhesives' },
        { name: 'Hydroxyethyl Acrylate (HEA)', application: 'Reactive acrylic formulations' },
        { name: 'Isophorone Diisocyanate (IPDI)', application: 'Specialty polyurethane systems' },
        { name: 'Hexamethylene Diisocyanate (HDI)', application: 'PU coatings and crosslinking systems' },
        { name: 'Dibutyltin Dilaurate (DBTDL)', application: 'Polyurethane catalyst; regulatory restrictions may apply' },
        { name: 'Fumed Silica', application: 'Thickening and rheology control' },
        { name: 'Benzoyl Peroxide', application: 'Polymerisation initiator; special handling requirements' }
      ]
    }

  ];

  // COMBINE ALL CATEGORIES INTO ONE PRODUCT LIST

  products: PackagingProduct[] =
    this.groups.flatMap(group =>
      group.items.map(item => ({
        ...item,
        category: group.category,
        icon: group.icon
      }))
    );

  categories: string[] = [
    'All Products',
    ...this.groups.map(group => group.category)
  ];

  // SEARCH AND CATEGORY FILTER

  get filteredProducts(): PackagingProduct[] {

    const search = this.searchTerm.toLowerCase().trim();

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
