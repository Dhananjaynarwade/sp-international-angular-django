import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
[x: string]: any;

  mobileMenuOpen = false;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigateToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.mobileMenuOpen = false;

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  @HostListener('document:click', ['$event'])
  closeMenuOutside(event: MouseEvent): void {
    if (
      this.mobileMenuOpen &&
      !this.elementRef.nativeElement.contains(event.target as Node)
    ) {
      this.mobileMenuOpen = false;
    }
  }
}