import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen bg-slate-50 font-sans text-slate-900">
      <!-- Sidebar -->
      <aside class="w-64 bg-slate-900 flex flex-col shadow-xl z-20">
        <div class="p-6 flex items-center gap-3">
          <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <span class="text-lg font-bold text-white tracking-tight">StockManager</span>
        </div>
        
        <nav class="flex-1 px-4 space-y-1 mt-4">
          <a routerLink="/dashboard/products" routerLinkActive="bg-slate-800 text-white" 
             class="flex items-center gap-3 px-4 py-3 text-slate-400 rounded-lg transition-all hover:bg-slate-800 hover:text-slate-100 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Productos
          </a>
          <a routerLink="/dashboard/categories" routerLinkActive="bg-slate-800 text-white" 
             class="flex items-center gap-3 px-4 py-3 text-slate-400 rounded-lg transition-all hover:bg-slate-800 hover:text-slate-100 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Categorías
          </a>
          <a routerLink="/dashboard/reports" routerLinkActive="bg-slate-800 text-white" 
             class="flex items-center gap-3 px-4 py-3 text-slate-400 rounded-lg transition-all hover:bg-slate-800 hover:text-slate-100 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reportes
          </a>
        </nav>
        
        <div class="p-4 border-t border-slate-800">
          <button (click)="logout()" 
                  class="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Cerrar Sesión
          </button>
        </div>
      </aside>
      
      <!-- Content Area -->
      <main class="flex-1 flex flex-col overflow-hidden">
        <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 transition-all">
          <div class="flex items-center gap-4">
            <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Sistema de Inventarios <span class="mx-2 text-slate-300">/</span> <span class="text-slate-800 lowercase">{{currentPath}}</span></h3>
          </div>
          <div class="flex items-center gap-4">
             <div class="flex items-center gap-3 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
               <div class="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600">AD</div>
               <span class="text-sm font-medium text-slate-700">Administrador</span>
             </div>
          </div>
        </header>
        
        <div class="flex-1 overflow-auto p-8">
          <div class="max-w-7xl mx-auto">
            <router-outlet></router-outlet>
          </div>
        </div>
      </main>
    </div>
  `
})
export class DashboardComponent {
  get currentPath() {
    return window.location.pathname.split('/').pop() || 'inicio';
  }

  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
