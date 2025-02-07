import { Component, Input } from '@angular/core';
import { JobOffer, JobOfferService } from 'src/app/services/job-offers.service';

@Component({
  selector: 'app-job-offers-stats',
  templateUrl: './job-offers-stats.component.html',
  styleUrls: ['./job-offers-stats.component.css']
})
export class JobOffersStatsComponent {
  jobOffers: JobOffer[] = [];
  stats = {
    totalOffers: 0,
    byEmploymentType: {
      'Full-time': 0,
      'Part-time': 0,
      'Contract': 0,
      'Internship': 0,
      'Temporary': 0
    },
    byExperienceLevel: {
      'Entry': 0,
      'Mid': 0,
      'Senior': 0
    },
    remoteOption: {
      yes: 0,
      no: 0
    }
  };

  constructor(private jobOffersService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOffersService.getJobOffers().subscribe((offers: JobOffer[]) => {
      this.jobOffers = offers;
      this.calculateStats();
    });
  }

  calculateStats(): void {
    this.stats.totalOffers = this.jobOffers.length;

    this.jobOffers.forEach(offer => {
      if (offer.employmentType in this.stats.byEmploymentType) {
        this.stats.byEmploymentType[offer.employmentType]++;
      }
    });

    this.jobOffers.forEach(offer => {
      if (offer.experienceLevel in this.stats.byExperienceLevel) {
        this.stats.byExperienceLevel[offer.experienceLevel]++;
      }
    });

    this.jobOffers.forEach(offer => {
      if (offer.remoteOption) {
        this.stats.remoteOption.yes++;
      } else {
        this.stats.remoteOption.no++;
      }
    });
  }
}
