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
export class ProfileComponent {}
