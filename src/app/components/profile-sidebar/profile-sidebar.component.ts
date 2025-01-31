import { Component, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css'],
})
export class ProfileSidebarComponent {
  @Input() username: string = '';
  @Input() selectedOption: string = '';
  @Input() info: { birthdate: string; email: string; nationality: string } = { 
    birthdate: '', 
    email: '', 
    nationality: '' 
  };
  @Input() address: { country: string; region: string; phone: string } = { 
    country: '', 
    region: '', 
    phone: '' 
  };

  isDropdownOpen = false;
  isEditingUsername = false;
  isEditingInfo = false;
  isEditingAddress = false;
  
  options = [
    'Looking for an internship',
    'Looking for a new opportunity',
    'Looking for training',
  ];

  constructor(private profileService: ProfileService) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.updatePreference();
  }

  // Update methods
  toggleEditUsername() {
    this.isEditingUsername = !this.isEditingUsername;
  }

  toggleEditInfo() {
    this.isEditingInfo = !this.isEditingInfo;
  }

  toggleEditAddress() {
    this.isEditingAddress = !this.isEditingAddress;
  }

  // Common update handler
  private handleUpdate(updateData: any, successMessage: string) {
    console.log('Attempting update:', updateData);
    
    this.profileService.updateProfile1(updateData).subscribe({
      next: (response) => {
        console.log(successMessage);
        console.log('Response:', response);
      },
      error: (error) => {
        console.error('Update error:', error);
        alert('Update failed - check console for details');
      }
    });
  }

  updateUsername() {
    if (this.username.trim()) {
      this.handleUpdate(
        { username: this.username },
        'Username updated successfully!'
      );
      this.isEditingUsername = false;
    }
  }

  updateInfo() {
    this.handleUpdate(
      { personal_info: this.info },
      'Personal information updated successfully!'
    );
    this.isEditingInfo = false;
  }

  updateAddress() {
    this.handleUpdate(
      { address: this.address },
      'Address updated successfully!'
    );
    this.isEditingAddress = false;
  }

  updatePreference() {
    if (this.selectedOption) {
      this.handleUpdate(
        { employment_preference: this.selectedOption },
        'Employment preference updated successfully!'
      );
    }
  }


  profilePicture: string = '../../../assets/default.png'; // Default image

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        this.profilePicture = e.target?.result as string; // Update preview
        this.profileService.updateProfilePicture(this.profilePicture).subscribe({
          next: (response) => console.log('Profile picture updated:', response),
          error: (error) => console.error('Update failed:', error),
        });
      };
  
      reader.readAsDataURL(file);
    }
  }

}