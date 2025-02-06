import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signup(signupForm: NgForm) {
    if (signupForm.invalid || signupForm.value.password !== signupForm.value.confirmPassword) {
      alert('Please ensure all fields are correctly filled and passwords match.');
      return;
    }

    const user = {
      firstName: signupForm.value.firstName,
      lastName: signupForm.value.lastName,
      username: signupForm.value.username,
      email: signupForm.value.email,
      password: signupForm.value.password,
      dateOfBirth: signupForm.value.dateOfBirth,
      phoneNumber: signupForm.value.phoneNumber,
      verified: false,
      gender: signupForm.value.gender,
      photo: '',
      isRecruiter: signupForm.value.isRecruiter === 'true'
    };

    this.authService.signup(user).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        alert('Signup successful!');
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
