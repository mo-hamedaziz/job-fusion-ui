import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BASE_URL } from '../constants';
import { Router } from '@angular/router';

export interface decodedToken {
  userId: string;
  isRecruiter: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${BASE_URL}/auth`;

  private isAuthenticatedSubject = new BehaviorSubject<boolean | null>(null);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private isRecruiterSubject = new BehaviorSubject<boolean | null>(null);
  isRecruiter$ = this.isRecruiterSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthentication();
  }

  checkAuthentication() {
    this.http
      .get<{ recruiter: boolean }>(`${this.apiUrl}/is_authenticated`, {
        withCredentials: true,
      })
      .subscribe({
        next: (response) => {
          this.isAuthenticatedSubject.next(true);
          this.isRecruiterSubject.next(response.recruiter === true);
        },
        error: () => {
          this.isAuthenticatedSubject.next(false);
          this.isRecruiterSubject.next(false);
        },
      });
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/sign`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.isAuthenticatedSubject.next(true);
          this.checkAuthentication();
        })
      );
  }

  logout() {
    return this.http
      .get(`${this.apiUrl}/logout`, { withCredentials: true })
      .pipe(
        tap(() => {
          this.isAuthenticatedSubject.next(false);
          document.cookie = 'token=; Max-Age=0; path=/; domain=localhost';
          this.router.navigate(['/signin']);
        })
      );
  }

  getUserId(): Observable<decodedToken> {
    return this.http.get<decodedToken>(`${BASE_URL}/user/me`, {
      withCredentials: true,
    });
  }
}
