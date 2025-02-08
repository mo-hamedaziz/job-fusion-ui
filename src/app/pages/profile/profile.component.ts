import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
class User {
  username: string;
  birthdate: string | null;
  email: string;
  country: string | null;
  region: string | null;
  phone: string | null;
  Summary: string | null;
  WorkExperiences: string[] | null;
  Studies: string []| null;
  Languages: string | null;
  photo: string | null;
  cv: string | null;

  constructor() {
    this.username = '';
    this.birthdate = null;
    this.email = '';
    this.country = "select a country";
    this.region = "select a region";
    this.phone = null;
    this.Summary = "add a summary here!";
    this.WorkExperiences = null;
    this.Studies = null;
    this.Languages = null;
    this.photo = null;
    this.cv = null;
  }
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  userData :User;
   

  constructor(private profileService: ProfileService) {

    this.userData=new User();
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.profileService.getProfile().subscribe(
      (data) => {
        this.userData = {
          ...this.userData,
          username: data.username || "",
          birthdate: data.dateOfBirth || "",
          email: data.email || "",
          country: data.country || this.userData.country,
          region: data.region || this.userData.region,
          phone: data.phoneNumber || "12345678",
          Summary: data.summary || this.userData.Summary,
          WorkExperiences: data.work_experiences ||"",
          Studies: data.studies || "",
          Languages: data.languages || "",
          cv: data.cv||""
        };
        console.log('User profile fetched:', this.userData);
        this.loadProfilePhoto();

        this.loadCV();
      },
      (error) => console.error('Error fetching profile:', error)
    );
  }

  loadProfilePhoto(): void {
    this.profileService.getPhoto().subscribe(
      (blob) => {
        if (blob.size > 0) {
          const objectURL = URL.createObjectURL(blob);
          this.userData.photo = objectURL;
        }
      },
      (error) => console.warn('No profile photo found.')
    );
  }

  loadCV(): void {
    this.profileService.getCV().subscribe(
      (blob) => {
        if (blob.size > 0) {
          const objectURL = URL.createObjectURL(blob);
          this.userData.cv = objectURL;
        }
      },
      (error) => console.warn('No CV found.')
    );
  }
};

  


  
