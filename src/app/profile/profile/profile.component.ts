import { Component } from '@angular/core';
import { ProfileMainComponent } from '../profile-main/profile-main.component';
import { ProfileSidebarComponent } from '../profile-sidebar/profile-sidebar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileMainComponent, ProfileSidebarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData = {
    "sidebar": {
      "username": "John Doe",
      "selectedOption": "option1",
      "info": {
        "birthdate": "01-01-1990",
        "email": "johndoe@example.com",
        "nationality": "American"
      },
      "address": {
        "country": "USA",
        "region": "California",
        "phone": "123-456-7890"
      }
    },
    "main":{
      Summary:"I am a motivated professional with experience in software development and network engineering. Passionate about leveraging cutting-edge technologies to solve real-world challenges.",
      WorkExperiences:[{company: "TechCorp", role: "Software Engineer", start: "2017", end: "2021"}],
      Studies:[{institution: "INSAT",degree: "Engineering in Networks and Telecommunications",from: "2021",to: "2026"}],
      Languages:["Arabic","English","French"]
      }
   }
 };

  


  
