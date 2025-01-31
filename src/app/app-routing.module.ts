import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ApplyForJobComponent } from './components/apply-for-job/apply-for-job.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RecruiterApgeComponent } from './pages/recruiter-apge/recruiter-apge.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'recruiter', component: RecruiterApgeComponent },
  { path: 'candidate/apply/:job_offer_id', component: ApplyForJobComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'landing', component: LandingPageComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', redirectTo: '/landing' },
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the routes
  exports: [RouterModule] // Export RouterModule for use in the app
})
export class AppRoutingModule { }