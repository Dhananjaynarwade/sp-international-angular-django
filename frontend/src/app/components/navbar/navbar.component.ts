import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,  RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
scrollToSection(sectionId: string): void {

  // Close mobile menu
  this.mobileMenuOpen = false;

  // Wait for Angular navigation to render the page
  setTimeout(() => {

    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  }, 200);

}

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

  // Close mobile menu
  this.mobileMenuOpen = false;

  // Use clean Angular URLs
  const route =
    sectionId === 'home' ? '/' : `/${sectionId}`;

  await this.router.navigateByUrl(route);
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