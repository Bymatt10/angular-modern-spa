import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="login-wrapper">
      <div class="login-card">
        <div class="brand-header">
          <div class="logo-circle">📦</div>
          <h1>InventoryPro</h1>
          <p>Bienvenido de nuevo</p>
        </div>
        
        <form (ngSubmit)="onLogin()">
          <div class="input-group">
            <label>Correo Electrónico</label>
            <div class="input-field">
              <span class="icon">✉️</span>
              <input type="email" [(ngModel)]="email" name="email" placeholder="ejemplo@correo.com" required>
            </div>
          </div>

          <div class="input-group">
            <label>Contraseña</label>
            <div class="input-field">
              <span class="icon">🔒</span>
              <input type="password" [(ngModel)]="password" name="password" placeholder="••••••••" required>
            </div>
          </div>

          <div class="actions">
            <label class="remember">
              <input type="checkbox"> Recordarme
            </label>
            <a href="#" class="forgot">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" class="btn-login">
            Iniciar Sesión
            <span class="arrow">→</span>
          </button>
        </form>

        <div class="footer">
          <p>¿No tienes una cuenta? <a routerLink="/register">Regístrate gratis</a></p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    .login-wrapper {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem;
    }

    .login-card {
      background: white;
      width: 100%;
      max-width: 420px;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      animation: slideUp 0.5s ease-out;
    }

    .brand-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .logo-circle {
      width: 60px;
      height: 60px;
      background: #f0f4ff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      margin: 0 auto 1rem;
      box-shadow: 0 4px 10px rgba(100, 116, 139, 0.1);
    }

    h1 {
      color: #1a202c;
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 0.5rem;
    }

    p {
      color: #718096;
      font-size: 0.95rem;
      margin: 0;
    }

    .input-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      color: #4a5568;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .input-field {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-field .icon {
      position: absolute;
      left: 1rem;
      font-size: 1.1rem;
      opacity: 0.5;
      pointer-events: none;
    }

    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 0.85rem 1rem 0.85rem 2.8rem;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s;
      outline: none;
      background: #f8fafc;
    }

    input:focus {
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      font-size: 0.9rem;
    }

    .remember {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #4a5568;
      cursor: pointer;
    }

    .forgot {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
    }

    .forgot:hover {
      text-decoration: underline;
    }

    .btn-login {
      width: 100%;
      padding: 0.9rem;
      background: linear-gradient(to right, #667eea, #764ba2);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-login:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
    }

    .btn-login:active {
      transform: translateY(0);
    }

    .footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: #718096;
      border-top: 1px solid #e2e8f0;
      padding-top: 1.5rem;
    }

    .footer a {
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService) { }

  onLogin() {
    this.auth.login(this.email, this.password);
  }
}
