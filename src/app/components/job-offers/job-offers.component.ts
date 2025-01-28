import { Component } from '@angular/core';
import { JobOffer, JobOfferService } from 'src/app/services/job-offers.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent {
  jobOffers: JobOffer[] = [];
  selectedJobOffer: JobOffer | null = null;

  constructor (private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOfferService.getJobOffers().subscribe((offers) => {
      this.jobOffers = offers;
    });
  }

  openJobOfferDetails(jobOffer: JobOffer) {
    this.selectedJobOffer = jobOffer;
  }

  closePopup() {
    this.selectedJobOffer = null;
  }
}
