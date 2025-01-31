import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/services/job-offers.service';

@Component({
  selector: 'app-job-offer-details',
  templateUrl: './job-offer-details.component.html',
  styleUrls: ['./job-offer-details.component.css']
})
export class JobOfferDetailsComponent {
  constructor (private router: Router) {}

  @Input() jobOffer!: JobOffer;
  @Output() close = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }

  onApply() {
    this.router.navigate([`/candidate/apply/${this.jobOffer.id}`]);
  }
}
