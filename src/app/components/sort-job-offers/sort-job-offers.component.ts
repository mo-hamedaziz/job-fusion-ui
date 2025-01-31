import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-job-offers',
  templateUrl: './sort-job-offers.component.html',
  styleUrls: ['./sort-job-offers.component.css']
})
export class SortJobOffersComponent {
  sortFields = ['title', 'company', 'location', 'employmentType', 'experienceLevel', 'postedDate'];
  selectedField: string = 'postedDate';
  sortOrder: 'asc' | 'desc' = 'desc';

  @Output() sortChange = new EventEmitter<{ field: string, order: 'asc' | 'desc' }>();

  onSortChange() {
    this.sortChange.emit({ field: this.selectedField, order: this.sortOrder });
  }

  getFieldDisplayName(field: string): string {
    const fieldMap: { [key: string]: string } = {
      title: 'Title',
      company: 'Company',
      location: 'Location',
      employmentType: 'Employment Type',
      experienceLevel: 'Experience Level',
      postedDate: 'Date of creation'
    };
    return fieldMap[field] || field;
  }
}
