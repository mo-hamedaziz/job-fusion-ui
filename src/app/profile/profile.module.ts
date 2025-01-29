import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSidebarComponent,
    ProfileMainComponent
  ],
  imports: [],
  exports: [],
})
export class ProfileModule {}
