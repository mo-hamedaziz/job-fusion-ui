import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-offers-filter',
  templateUrl: './job-offers-filter.component.html',
  styleUrls: ['./job-offers-filter.component.css']
})
export class JobOffersFilterComponent {
  @Output() filterChange = new EventEmitter<{ [key: string]: any }>();

  filter = {
    title: '',
    location: '',
    employmentType: '',
    experienceLevel: ''
  };

  onFilterChange() {
    this.filterChange.emit(this.filter);
  }

  resetFilters() {
    this.filter = {
      title: '',
      location: '',
      employmentType: '',
      experienceLevel: ''
    };
    this.onFilterChange();
  }
}
