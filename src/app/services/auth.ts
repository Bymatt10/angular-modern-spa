import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal(false);

  constructor(private router: Router) { }

  login(email: string, pass: string): boolean {
    // Mock login
    if (email && pass) {
      this.isAuthenticated.set(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }
}
