import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.css']
})
export class ValidationPageComponent {
  validationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private validationService: ValidationService,private router: Router ) {
    this.validationForm = this.fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{3}$')
        ]
      ]
    });
  }

  submitCode() {
    this.submitted = true;
    
    if (this.validationForm.valid) {
      const code = Number(this.validationForm.value.code);
      this.validationService.validateAccount(code).subscribe({
        next: (response) => {
          alert('Account validated, you\'ll be redirected to the login page ...');
          this.router.navigate(['/signin']);
        },
        error: (err) => console.error('Validation failed:', err)
      });
    }
  }
}
