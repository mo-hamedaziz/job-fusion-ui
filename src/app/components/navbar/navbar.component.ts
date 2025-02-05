import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated$ = this.authService.isAuthenticated$;
  isRecruiter$ = this.authService.isRecruiter$;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Refresh authentication status on every route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.authService.checkAuthentication();
    });
    
    /*this.isRecruiter$.subscribe(value => {
      console.log(value); // Logs the value of isRecruiter$
    });*/
  }

  login() {
    // this.authService.login();
    this.router.navigate(['/signin']);
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/landing']); // Redirect to landing or any other page
      },
      error: (err) => {
        console.error('Logout failed', err); // Handle error if any
      }
    });
  }
}
