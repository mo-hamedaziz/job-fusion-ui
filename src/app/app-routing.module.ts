import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ApplyForJobComponent } from './components/apply-for-job/apply-for-job.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'candidate/apply/:job_offer_id', component: ApplyForJobComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
