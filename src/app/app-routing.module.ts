import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';

// Define your routes
const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the routes
  exports: [RouterModule] // Export RouterModule for use in the app
})
export class AppRoutingModule { }