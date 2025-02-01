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
        (!filter['dateOfCreation'] || offer.createdAt >= filter['dateOfCreation']) &&
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

  onSortChange(sort: { field: string, order: 'asc' | 'desc' }) {
    const { field, order } = sort;
  
    this.filteredJobOffers = this.filteredJobOffers.sort((a, b) => {
      const valueA = a[field as keyof JobOffer];
      const valueB = b[field as keyof JobOffer];
  
      // Handle case when the values are undefined
      if (valueA === undefined || valueB === undefined) {
        return 0;  // Return 0 if any value is undefined, meaning no sorting will happen for that entry
      }
  
      // Handle string comparison
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      }
  
      // Handle date comparison (make sure they are dates)
      if (valueA instanceof Date && valueB instanceof Date) {
        return order === 'asc' ? valueA.getTime() - valueB.getTime() : valueB.getTime() - valueA.getTime();
      }
  
      // Handle numeric comparison (ensure values are numbers)
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return order === 'asc' ? valueA - valueB : valueB - valueA;
      }
  
      // Default case if the value types are unsupported
      return 0;
    });
  }
  
  
}
