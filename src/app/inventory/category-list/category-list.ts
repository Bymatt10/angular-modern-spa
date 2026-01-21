import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-end">
        <div>
          <h2 class="text-3xl font-bold text-slate-800 tracking-tight">Categorías</h2>
          <p class="text-slate-500 mt-1">Organización y clasificación del inventario</p>
        </div>
        <button class="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold transition-all shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Nueva Categoría
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div *ngFor="let cat of categories" class="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-all shadow-sm">
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <!-- Icono representativo genérico -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">
                {{cat.productCount}} SKUs
              </span>
            </div>
            
            <div class="mt-5">
              <h3 class="text-lg font-bold text-slate-800">{{cat.name}}</h3>
              <p class="text-slate-500 text-sm mt-2 leading-relaxed">{{cat.description}}</p>
            </div>
          </div>
          
          <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
            <button class="text-slate-600 hover:text-slate-900 text-sm font-bold">Configurar</button>
            <button class="text-slate-400 hover:text-red-500 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CategoryListComponent {
  categories = [
    { id: 1, name: 'Electrónica', description: 'Gadgets, computadoras y componentes electrónicos.', productCount: 45 },
    { id: 2, name: 'Accesorios', description: 'Teclados, mouses y periféricos de oficina.', productCount: 120 },
    { id: 3, name: 'Mobiliario', description: 'Sillas ergonómicas, escritorios y equipo.', productCount: 28 },
    { id: 4, name: 'Infraestructura', description: 'Servidores, racks y cableado estructurado.', productCount: 15 },
    { id: 5, name: 'Suministros', description: 'Papelería y consumibles generales.', productCount: 210 },
  ];
}
