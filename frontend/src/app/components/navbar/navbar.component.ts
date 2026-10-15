import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
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

  constructor(private elementRef: ElementRef<HTMLElement>,  private router: Router) {}

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

async navigateToSection(
  event: Event,
  sectionId: string
): Promise<void> {

  event.preventDefault();

  this.mobileMenuOpen = false;

  const scrollToSection = () => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const currentPath = this.router.url.split(/[?#]/)[0];

  if (currentPath !== '/') {
    const navigated = await this.router.navigate(['/'], {
      fragment: sectionId
    });

    if (navigated) {
      setTimeout(scrollToSection, 100);
    }

    return;
  }

  scrollToSection();
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