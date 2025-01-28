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
    sidebar: {
      username: 'John Doe',
      selectedOption: 'option1',
      info: { birthdate: '01-01-1990', email: 'johndoe@example.com', nationality: 'American' },
      address: { country: 'USA', region: 'California', phone: '123-456-7890' },
    },
    summary: [
      { title: 'Summary', content: 'I am a motivated professional with experience in software development and network engineering. Passionate about leveraging cutting-edge technologies to solve real-world challenges.' },
      { title: 'Work Experiences', content: 'Company: TechCorp\nRole: Software Engineer\nStart: 2017\nEnd: 2021\n' },
      { title: 'Studies', content: 'Institution: INSAT\nDegree: Engineering in Networks and Telecommunications\nFrom: 2021\nTo: 2026' },
      { title: 'Languages', content: 'Arabic, English, French.' },
    ],
  };
  
}