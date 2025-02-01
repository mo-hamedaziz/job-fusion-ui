import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-offers-filter',
  templateUrl: './job-offers-filter.component.html',
  styleUrls: ['./job-offers-filter.component.css'],
})
export class JobOffersFilterComponent {
  @Output() filterChange = new EventEmitter<{ [key: string]: any }>();

  filter = {
    location: '',
    employmentType: '',
    requirements: '',
    experienceLevel: '',
    remoteOption: '',
    dateOfCreation: '',
  };

  onFilterChange() {
    this.filterChange.emit(this.filter);
  }

  resetFilters() {
    this.filter = {
      location: '',
      employmentType: '',
      requirements: '',
      experienceLevel: '',
      remoteOption: '',
      dateOfCreation: '',
    };
    this.onFilterChange();
  }
}
