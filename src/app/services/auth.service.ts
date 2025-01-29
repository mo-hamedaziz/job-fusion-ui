import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(): void {
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
