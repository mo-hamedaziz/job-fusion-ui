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
  @Input() photo: string = '';  // Accept photo URL
  @Input() cv: string = '';     // Accept CV URL

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
  
  profilePicture: string = '../../../assets/default.png'; // Default image
  // Using ngOnChanges to check when photo changes
ngOnChanges() {
  if (this.photo) {
    this.profilePicture = this.photo;  // Set to received photo
  } else {
    this.profilePicture = '../../../assets/default.png';  // Default image
  }
}
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
      { date_of_birth : this.info.birthdate, email: this.info.email, nationality: this.info.nationality },
      'Personal information updated successfully!'
    );
    this.isEditingInfo = false;
  }

  updateAddress() {
    this.handleUpdate(
      { country: this.address.country, region: this.address.region , phoneNumber: this.address.phone },
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


  
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
  
      // Validate file type (only PNG and JPG)
      const allowedTypes = ['image/png', 'image/jpeg'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only PNG and JPG images are allowed.');
        return;
      }
  
      // Validate file size (max 10MB)
      const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSizeInBytes) {
        alert('The file size must be less than 10MB.');
        return;
      }
  
      // Prepare FormData
      const formData = new FormData();
      formData.append('file', file);
  
      // Send file to backend
      this.profileService.updateProfilePicture(formData).subscribe({
        next: (response) => {
          console.log('Profile picture updated:', response);
          
          // Update image preview
          const reader = new FileReader();
          reader.onload = (e) => {
            this.profilePicture = e.target?.result as string;
          };
          reader.readAsDataURL(file);
        },
        error: (error) => console.error('Update failed:', error),
      });
    }
  }
  onCvSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
  
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
  
      // Validate file type (Only PDF)
      if (file.type !== 'application/pdf') {
        alert('Invalid file type. Please upload a PDF document.');
        return;
      }
  
      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert('File size exceeds 10MB. Please choose a smaller file.');
        return;
      }
  
      // Prepare file for upload
      const formData = new FormData();
      formData.append('file', file);  // 'file' must match the backend expectation
  
      // Send file to backend
      this.profileService.uploadCv(formData).subscribe({
        next: (response) => console.log('CV uploaded successfully:', response),
        error: (error) => console.error('CV upload failed:', error),
      });
    }
  }
  
  

}