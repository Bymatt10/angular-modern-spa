import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h2>Crear Cuenta</h2>
        <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" placeholder="John Doe">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="admin@example.com">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" placeholder="******">
        </div>
        <button [routerLink]="['/login']">Registrarse</button>
        <p class="link">Ya tienes cuenta? <a routerLink="/login">Inicia Sesión</a></p>
      </div>
    </div>
  `,
  styles: [`
    .auth-container { display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f2f5; }
    .auth-card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 350px; }
    h2 { text-align: center; color: #333; margin-bottom: 1.5rem; }
    .form-group { margin-bottom: 1rem; }
    label { display: block; margin-bottom: 0.5rem; color: #666; font-size: 0.9rem; }
    input { width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
    button { width: 100%; padding: 0.75rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
    button:hover { background: #218838; }
    .link { margin-top: 1rem; text-align: center; font-size: 0.9rem; }
    a { color: #007bff; text-decoration: none; }
  `]
})
export class RegisterComponent { }
