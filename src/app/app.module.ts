import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { RecruiterJobListComponent } from './recruiter-job-list/recruiter-job-list.component';
import { RecruiterJobFormComponent } from './components/recruiter-job-form/recruiter-job-form/recruiter-job-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecruiterApgeComponent } from './pages/recruiter-apge/recruiter-apge.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    JobOffersComponent,
    SignupComponent,
    JobPostComponent,
    JobDetailsComponent,
    RecruiterJobListComponent,
    RecruiterJobFormComponent,
    RecruiterApgeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
