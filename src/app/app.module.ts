import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { JobOfferDetailsComponent } from './components/job-offer-details/job-offer-details.component';
import { ApplyForJobComponent } from './components/apply-for-job/apply-for-job.component';
import { JobOffersFilterComponent } from './components/job-offers-filter/job-offers-filter.component';
import { JobOffersSearchBarComponent } from './components/job-offers-search-bar/job-offers-search-bar.component';
import { SortJobOffersComponent } from './components/sort-job-offers/sort-job-offers.component';
import { JobOffersStatsComponent } from './components/job-offers-stats/job-offers-stats.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { RecruiterJobFormComponent } from './components/recruiter-job-form/recruiter-job-form/recruiter-job-form.component';

import { DefaultCompanyLogoPipe } from './pipes/default-company-logo.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';
import { ProfileMainComponent } from './components/profile-main/profile-main.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileSidebarComponent,
    ProfileMainComponent,
    WelcomePageComponent,
    NavbarComponent,
    JobOffersComponent,
    JobOfferDetailsComponent,
    ApplyForJobComponent,
    JobOffersFilterComponent,
    JobOffersSearchBarComponent,
    SortJobOffersComponent,
    JobOffersStatsComponent,
    SigninComponent,
    SignupComponent,
    RecruiterComponent,
    RecruiterJobFormComponent,
    DefaultCompanyLogoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}