
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-boat-animation',
  standalone: true,
  templateUrl: './boat-animation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './boat-animation.component.css'
})
export class BoatAnimationComponent
  implements AfterViewInit, OnDestroy {

  @ViewChild('boatTrack')
  boatTrack!: ElementRef<HTMLElement>;

  @ViewChild('boat')
  boat!: ElementRef<HTMLElement>;

  boatX = 0;
  progress = 0;

  private frameId = 0;

  ngAfterViewInit(): void {
    this.scheduleUpdate();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWindowChange(): void {
    this.scheduleUpdate();
  }

  private scheduleUpdate(): void {
    if (this.frameId) return;

    this.frameId = requestAnimationFrame(() => {
      this.frameId = 0;
      this.updateBoat();
    });
  }

  private updateBoat(): void {
    if (!this.boatTrack || !this.boat) return;

    const track = this.boatTrack.nativeElement;
    const rect = track.getBoundingClientRect();

    const distance = Math.max(
      1,
      track.offsetHeight - window.innerHeight
    );

    // 0 = start, 1 = finish
    this.progress = Math.max(
      0,
      Math.min(1, -rect.top / distance)
    );

    const boatWidth = this.boat.nativeElement.offsetWidth;


/* Start completely outside the left side */
const startX = -boatWidth;

/* Stop 30px before the right edge */

const endX = Math.max(
  0,
  this.boatTrack.nativeElement.clientWidth - boatWidth
  +(boatWidth * 45 / 700)
);


/* Smooth movement controlled by scrolling */
this.boatX =
  startX + (endX - startX) * this.progress;

    this.boatX =
      startX + (endX - startX) * this.progress;
  }

  ngOnDestroy(): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }
}
