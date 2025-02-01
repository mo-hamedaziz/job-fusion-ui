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
  @Input() address: { country: string; region: string; phone: number } = { 
    country: '', 
    region: '', 
    phone: 0 
  };
  countryList: string[] = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Democratic Republic)", "Congo (Republic)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
    "Zimbabwe"
  ];
  
  
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