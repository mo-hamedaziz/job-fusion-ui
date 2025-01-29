import { Component } from '@angular/core';
import { JobOffer, JobOfferService } from 'src/app/services/job-offers.service';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent {
  jobOffers: JobOffer[] = [];
  filteredJobOffers: JobOffer[] = [];
  selectedJobOffer: JobOffer | null = null;

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.jobOfferService.getJobOffers().subscribe((offers) => {
      this.jobOffers = offers;
      this.filteredJobOffers = offers;
    });
  }

  openJobOfferDetails(jobOffer: JobOffer) {
    this.selectedJobOffer = jobOffer;
  }

  closePopup() {
    this.selectedJobOffer = null;
  }

  onFilterChange(filter: { [key: string]: any }) {
    this.filteredJobOffers = this.jobOffers.filter((offer) => {
      return (
        (!filter['location'] || offer.location.toLowerCase().includes(filter['location'].toLowerCase())) &&
        (!filter['employmentType'] || offer.employmentType === filter['employmentType']) &&
        (!filter['experienceLevel'] || offer.experienceLevel === filter['experienceLevel']) &&
        (!filter['remoteOption'] || offer.remoteOption === filter['remoteOption']) &&
        (!filter['requirements'] || this.matchRequirements(offer.requirements, filter['requirements'])) &&
        (!filter['dateOfCreation'] || offer.postedDate >= filter['dateOfCreation']) &&
        (!filter['title'] || offer.title.toLowerCase().includes(filter['title'].toLowerCase()))
      );
    });
  }

  private matchRequirements(jobRequirements: string[], filterRequirements: string): boolean {
    const requiredKeywords = filterRequirements.toLowerCase().split(',').map(req => req.trim());
    return requiredKeywords.every(keyword => 
      jobRequirements.some(req => req.toLowerCase().includes(keyword))
    );
  }
}
