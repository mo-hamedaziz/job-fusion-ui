import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent {
  @Input() summaryData: { title: string; content: string }[] = [];

  editedIndex: number | null = null; // Track which item is being edited
  editContent: string = ''; // Temporary storage for the content being edited
  showAddForm = false; // Tracks if the add form is visible
  currentAddItem: any = null; // Tracks which section is being added to
  newEntry = { companyOrInstitution: '', roleOrDegree: '', from: '', to: '' }; // Temporary storage for new entries

  startEditing(index: number, currentContent: string): void {
    this.editedIndex = index;
    this.editContent = currentContent;
  }

  saveEdit(index: number): void {
    if (this.editedIndex !== null) {
      this.summaryData[index].content = this.editContent;
      this.editedIndex = null;
      this.editContent = '';
    }
  }

  toggleAddForm(item: any): void {
    this.showAddForm = this.currentAddItem === item ? !this.showAddForm : true;
    this.currentAddItem = item;
    this.newEntry = { companyOrInstitution: '', roleOrDegree: '', from: '', to: '' }; // Reset form fields
  }

  addNewEntry(item: any): void {
    const isWorkExperience = item.title === 'Work Experiences';
    const newContent = isWorkExperience
      ? `Company: ${this.newEntry.companyOrInstitution}\nRole: ${this.newEntry.roleOrDegree}\nFrom: ${this.newEntry.from}\nTo: ${this.newEntry.to}`
      : `Institution: ${this.newEntry.companyOrInstitution}\nDegree: ${this.newEntry.roleOrDegree}\nFrom: ${this.newEntry.from}\nTo: ${this.newEntry.to}`;

    item.content += `\n\n${newContent}`; // Append new entry under the previous ones
    this.showAddForm = false; // Hide the add form
    this.currentAddItem = null;
  }
}
