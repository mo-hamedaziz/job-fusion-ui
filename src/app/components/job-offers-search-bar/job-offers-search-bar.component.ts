import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-offers-search-bar',
  templateUrl: './job-offers-search-bar.component.html',
  styleUrls: ['./job-offers-search-bar.component.css']
})
export class JobOffersSearchBarComponent {
  searchQuery: string = '';

  @Output() filterChange = new EventEmitter<string>();

  onSearchChange() {
    this.filterChange.emit(this.searchQuery);
  }
}
