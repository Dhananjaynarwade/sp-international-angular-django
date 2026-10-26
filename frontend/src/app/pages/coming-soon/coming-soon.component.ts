import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent implements OnInit, OnDestroy {

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  // Example launch date — change this to your actual date
  private launchDate = new Date('2026-12-01T00:00:00+05:30');

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.updateCountdown();

    this.timer = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const remaining = Math.max(
      0,
      this.launchDate.getTime() - Date.now()
    );

    this.days = Math.floor(remaining / (1000 * 60 * 60 * 24));

    this.hours = Math.floor(
      (remaining / (1000 * 60 * 60)) % 24
    );

    this.minutes = Math.floor(
      (remaining / (1000 * 60)) % 60
    );

    this.seconds = Math.floor(
      (remaining / 1000) % 60
    );

    if (remaining === 0 && this.timer) {
      clearInterval(this.timer);
    }
  }

  notifyMe(): void {
    // Temporary action until we add email notifications
    alert('Notification registration is coming soon!');
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}