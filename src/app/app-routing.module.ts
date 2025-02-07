import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { RecruiterApgeComponent } from './pages/recruiter-apge/recruiter-apge.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ValidationPageComponent } from './pages/validation-page/validation-page.component';
import { RecruiterApplicationsComponent } from './pages/recruiter-applications/recruiter-applications.component';
import { ApplyForJobComponent } from './components/apply-for-job/apply-for-job.component';
import { roleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent, canActivate: [authGuard] },
  { path: 'recruiter', component: RecruiterApgeComponent, canActivate: [authGuard, roleGuard], data: { expectedRole: 'recruiter' } },
  { path: 'candidate/apply/:job_offer_id', component: ApplyForJobComponent, canActivate: [authGuard, roleGuard], data: { expectedRole: 'candidate' } },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard, roleGuard], data: { expectedRole: 'candidate' } },
  { path: 'applications', component: RecruiterApplicationsComponent, canActivate: [authGuard, roleGuard], data: { expectedRole: 'recruiter' } },
  
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'validation', component: ValidationPageComponent },
  
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
