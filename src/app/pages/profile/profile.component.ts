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
        "nationality": "American",
        "country": "USA",
        "region": "California",
        "phone": 12345678,
      "Summary":"I am a motivated professional with experience in software development and network engineering. Passionate about leveraging cutting-edge technologies to solve real-world challenges.",
      "WorkExperiences":[{company: "TechCorp", role: "Software Engineer", start: "2017", end: "2021"}],
      "Studies":[{institution: "INSAT",degree: "Engineering in Networks and Telecommunications",from: "2021",to: "2026"}],
      "Languages":["Arabic","English","French"]
      }
   
   ngOnInit(): void {
     
   }
   /*
    userData: any; // Variable to hold the fetched profile data

  // Inject ProfileService
  constructor(private profileService: ProfileService) {}

  
  ngOnInit(): void {
    // Fetch profile data
    this.profileService.getProfile().subscribe(
      (data) => {
        this.userData = { ...this.userData, ...data };
        console.log('User profile fetched:', this.userData);
      },
      (error) => console.error('Error fetching profile:', error)
    );

    // Fetch profile photo
    this.profileService.getPhoto().subscribe(
      (blob) => {
        const objectURL = URL.createObjectURL(blob);
        this.userData.sidebar.photo = objectURL;
      },
      (error) => console.warn('No profile photo found.')
    );

    // Fetch CV
    this.profileService.getCV().subscribe(
      (blob) => {
        const objectURL = URL.createObjectURL(blob);
        this.userData.sidebar.cv = objectURL;
      },
      (error) => console.warn('No CV found.')
    );
  }*/ 
 };

  


  
