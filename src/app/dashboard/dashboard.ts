import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="dashboard-layout">
      <aside class="sidebar">
        <div class="brand">InventoryPro</div>
        <nav>
          <a routerLink="/dashboard/products" routerLinkActive="active">📦 Productos</a>
          <a routerLink="/dashboard/categories" routerLinkActive="active">🏷️ Categorías</a>
          <a routerLink="/dashboard/reports" routerLinkActive="active">📊 Reportes</a>
          <a routerLink="/dashboard/settings" routerLinkActive="active">⚙️ Configuración</a>
        </nav>
        <div class="user-info">
          <button (click)="logout()">Cerrar Sesión</button>
        </div>
      </aside>
      
      <main class="content">
        <header class="top-bar">
          <h3>Dashboard</h3>
          <div class="user-profile">Admin User</div>
        </header>
        <div class="scrollable-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-layout { display: flex; height: 100vh; background: #f4f6f9; }
    
    .sidebar { width: 250px; background: #2c3e50; color: white; display: flex; flex-direction: column; }
    .brand { padding: 1.5rem; font-size: 1.5rem; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); }
    
    nav { flex: 1; padding: 1rem 0; }
    nav a { display: block; padding: 1rem 1.5rem; color: #aeb6bf; text-decoration: none; transition: 0.2s; }
    nav a:hover, nav a.active { background: #34495e; color: white; border-left: 4px solid #3498db; }
    
    .user-info { padding: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); }
    .user-info button { width: 100%; padding: 0.5rem; background: transparent; border: 1px solid #e74c3c; color: #e74c3c; border-radius: 4px; cursor: pointer; }
    .user-info button:hover { background: #e74c3c; color: white; }

    .content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .top-bar { background: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .scrollable-content { flex: 1; overflow-auto: auto; padding: 2rem; }
  `]
})
export class DashboardComponent {
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
