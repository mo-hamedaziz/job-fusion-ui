import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileSidebarComponent } from './profile/profile-sidebar/profile-sidebar.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { DefaultCompanyLogoPipe } from './pipes/default-company-logo.pipe';
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
    DefaultCompanyLogoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}