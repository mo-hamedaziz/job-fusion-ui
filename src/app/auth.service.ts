import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface decodedToken {
  userId: string,
  isRecruiter: boolean,
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Signup Method
  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  // Login Method 
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign`, credentials, { withCredentials: true });
  }

  getUserId(): Observable<decodedToken> {
    return this.http.get<decodedToken>(`http://localhost:3000/user/me`, { withCredentials: true });
  }
}
