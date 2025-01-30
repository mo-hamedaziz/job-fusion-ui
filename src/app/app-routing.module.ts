import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ApplyForJobComponent } from './components/apply-for-job/apply-for-job.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'recruiter', component: RecruiterComponent },
  { path: 'candidate/apply/:job_offer_id', component: ApplyForJobComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the routes
  exports: [RouterModule] // Export RouterModule for use in the app
})
export class AppRoutingModule { }