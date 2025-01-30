import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signup(signupForm: NgForm) {
    if (signupForm.invalid) {
      return;
    }

    const user = {
      username: signupForm.value.username,
      email: signupForm.value.email,
      password: signupForm.value.password,
      date_of_birth: signupForm.value.date_of_birth,
      Recruiter: signupForm.value.Recruiter === 'true', // Convert string to boolean
      PhoneNumber: signupForm.value.PhoneNumber,
    };

    this.authService.signup(user).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        alert('Signup successful!'); 
        //momkin il verif chtist7a9ilhom fil back!
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('password', user.password);
        this.router.navigate(['/validation']);
      },
      error: (error) => {
        console.error('Signup failed', error);
        alert('Signup failed. Please try again.');
      },
    });
  }
}
