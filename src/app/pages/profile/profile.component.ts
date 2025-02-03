import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData = {
      "username": "John Doe",
      "selectedOption": "option1",
        "birthdate": "01-01-1990",
        "email": "johndoe@example.com",
        "country": "USA",
        "region": "California",
        "phone": "12345678",
      "Summary":"I am a motivated professional with experience in software development and network engineering. Passionate about leveraging cutting-edge technologies to solve real-world challenges.",
      "WorkExperiences":[{company: "TechCorp", role: "Software Engineer", start: "2017", end: "2021"}],
      "Studies":[{institution: "INSAT",degree: "Engineering in Networks and Telecommunications",from: "2021",to: "2026"}],
      "Languages":["Arabic","English","French"],
      photo: null,
      cv: null
      }
   
   ngOnInit(): void {
     
   }
   /*
    userData: any; // Variable to hold the fetched profile data

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    // Fetch profile data
    this.profileService.getProfile().subscribe(
      (data) => {
        this.userData = {
          ...this.userData,
          username: data.username || this.userData.username,
          selectedOption: data.selectedOption || this.userData.selectedOption,
          birthdate: data.birthdate || this.userData.birthdate,
          email: data.email || this.userData.email,
          nationality: data.nationality || this.userData.nationality,
          country: data.country || this.userData.country,
          region: data.region || this.userData.region,
          phone: data.phone || this.userData.phone,
          Summary: data.Summary || this.userData.Summary,
          WorkExperiences: data.WorkExperiences || this.userData.WorkExperiences,
          Studies: data.Studies || this.userData.Studies,
          Languages: data.Languages || this.userData.Languages
        };
        console.log('User profile fetched:', this.userData);

        // Fetch profile photo and CV after profile data is loaded
        this.loadProfilePhoto();
        this.loadCV();
      },
      (error) => console.error('Error fetching profile:', error)
    );
  }

  loadProfilePhoto(): void {
    // Fetch profile photo
    this.profileService.getPhoto().subscribe(
      (blob) => {
        if (blob.size > 0) {
          const objectURL = URL.createObjectURL(blob);
          this.userData.sidebar.photo = objectURL;
        }
      },
      (error) => console.warn('No profile photo found.')
    );
  }

  loadCV(): void {
    // Fetch CV
    this.profileService.getCV().subscribe(
      (blob) => {
        if (blob.size > 0) {
          const objectURL = URL.createObjectURL(blob);
          this.userData.sidebar.cv = objectURL;
        }
      },
      (error) => console.warn('No CV found.')
    );
  }
}
*/ 
 };

  


  
