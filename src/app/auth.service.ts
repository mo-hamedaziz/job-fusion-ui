import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface decodedToken {
  userId: string,
  isRecruiter: boolean,
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your API URL
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.checkAuthentication();
  }

  checkAuthentication() {
    this.http.get<{ authenticated: boolean }>('http://localhost:3000/auth/is_authenticated', { withCredentials: true })
      .subscribe({
        next: () => this.isAuthenticatedSubject.next(true),
        error: () => this.isAuthenticatedSubject.next(false)
      });
  }

  // Signup Method
  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  // Login Method 
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign`, credentials, { withCredentials: true });
  }

  logout() {
    return this.http.get(`${this.apiUrl}/logout`, { withCredentials: true }).pipe(
      // After logging out, update the authentication state
      tap(() => {
        this.isAuthenticatedSubject.next(false); // Update the state
        // Optionally, clear cookies here
        document.cookie = 'token=; Max-Age=0; path=/; domain=localhost'; // Adjust the cookie name if needed
      })
    );
  }

  getUserId(): Observable<decodedToken> {
    return this.http.get<decodedToken>(`http://localhost:3000/user/me`, { withCredentials: true });
  }
}
