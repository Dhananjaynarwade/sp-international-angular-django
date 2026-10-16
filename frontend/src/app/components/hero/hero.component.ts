
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hero.component.css'
})
export class HeroComponent {}
