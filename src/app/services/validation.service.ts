import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private apiUrl = 'http://localhost:3000/auth';
  
  constructor(private http: HttpClient) {}
  
  validateAccount(code: number): Observable<any> {
    const email = sessionStorage.getItem('email');
    const password = sessionStorage.getItem('password');

    if (!email || !password) {
      throw new Error('User credentials not found in session storage');
    }

    const body = { email, password };
    return this.http.post(`${this.apiUrl}/verify/${code}`, body, {withCredentials: true});
  }
}
