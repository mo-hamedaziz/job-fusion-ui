import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { JobOfferDetailsComponent } from './components/job-offer-details/job-offer-details.component';
import { ApplyForJobComponent } from './components/apply-for-job/apply-for-job.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    JobOffersComponent,
    JobOfferDetailsComponent,
    ApplyForJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
