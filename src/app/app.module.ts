import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileSidebarComponent } from './profile/profile-sidebar/profile-sidebar.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileSidebarComponent,
    ProfileMainComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}