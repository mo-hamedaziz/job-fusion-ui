import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ApplyForJobComponent } from './components/apply-for-job/apply-for-job.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'candidate/apply/:job_offer_id', component: ApplyForJobComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the routes
  exports: [RouterModule] // Export RouterModule for use in the app
})
export class AppRoutingModule { }