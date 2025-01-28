import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
})
export class ProfileSidebarComponent {
  @Input() username: string = '';
  @Input() selectedOption: string = '';
  @Input() info: { birthdate: string; email: string; nationality: string } = { birthdate: '', email: '', nationality: '' };
  @Input() address: { country: string; region: string; phone: string } = { country: '', region: '', phone: '' };

  isDropdownOpen = false; // To manage dropdown visibility
  isEditingUsername = false; // To manage username edit state
  // Options for the dropdown
  options = [
    'Looking for an internship',
    'Looking for a new opportunity',
    'Looking for training',
  ];

  // Information section
  isEditingInfo = false; // To manage info edit state

  // Address section
  isEditingAddress = false; // To manage address edit state
  

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Handle option selection
  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false; // Close dropdown after selection
  }

  // Toggle username edit mode
  toggleEditUsername() {
    this.isEditingUsername = !this.isEditingUsername;
  }

  // Update username (frontend only)
  updateUsername() {
    if (this.username.trim()) {
      console.log('Username updated to:', this.username);
      this.isEditingUsername = false; // Exit edit mode
    }
  }

  // Toggle info edit mode
  toggleEditInfo() {
    this.isEditingInfo = !this.isEditingInfo;
  }

  // Save updated info
  updateInfo() {
    console.log('Updated Information:', this.address);
    this.isEditingInfo = false; // Exit edit mode
  }

  // Toggle address edit mode
  toggleEditAddress() {
    this.isEditingAddress = !this.isEditingAddress;
  }

  // Save updated address
  updateAddress() {
    console.log('Updated Address:', this.address);
    this.isEditingAddress = false; // Exit edit mode
  }
}