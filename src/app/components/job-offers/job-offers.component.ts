import { Component } from '@angular/core';
import { JobOffer, JobOfferService } from 'src/app/services/job-offers.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent {
  jobOffers: JobOffer[] = [];

  constructor (private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.loadJobOffers();
  }

  // Load job offers from the service
  loadJobOffers(): void {
    this.jobOfferService.getJobOffers().subscribe((data) => {
      this.jobOffers = data;
    });
  }
}
