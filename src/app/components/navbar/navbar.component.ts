import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

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
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.authService.checkAuthentication();
    });
    
    /*this.isRecruiter$.subscribe(value => {
      console.log(value);
    });*/
  }

  login() {
    this.router.navigate(['/signin']);
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/landing']);
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }
}
