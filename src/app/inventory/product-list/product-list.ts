import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PdfService } from '../../services/pdf';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
    <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
        <div>
          <h2 class="text-xl font-bold text-slate-800">Catálogo de Productos</h2>
          <p class="text-slate-500 text-sm">Resumen detallado de existencias</p>
        </div>
        <div class="flex gap-3">
          <button (click)="downloadPdf()" class="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Exportar reporte
          </button>
          <button class="bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 shadow-sm">
            Nuevo Producto
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead class="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest border-b border-slate-100">
            <tr>
              <th class="px-6 py-4">ID</th>
              <th class="px-6 py-4">Producto</th>
              <th class="px-6 py-4">Categoría</th>
              <th class="px-6 py-4">Stock</th>
              <th class="px-6 py-4">Precio</th>
              <th class="px-6 py-4 text-center">Estado</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr *ngFor="let p of products" class="hover:bg-slate-50/50 transition-colors">
              <td class="px-6 py-4 text-slate-400 font-mono text-xs">#{{p.id | number:'3.0-0'}}</td>
              <td class="px-6 py-4 font-bold text-slate-700">{{p.name}}</td>
              <td class="px-6 py-4">
                <span class="text-slate-500 text-sm px-2 py-1 bg-slate-100 rounded">{{p.category}}</span>
              </td>
              <td class="px-6 py-4 font-semibold text-slate-600">{{p.stock}} <span class="text-slate-300 font-normal">unid.</span></td>
              <td class="px-6 py-4 font-bold text-slate-800">{{p.price | currency}}</td>
              <td class="px-6 py-4">
                <div class="flex justify-center">
                  <span [ngClass]="p.stock > 10 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'" 
                        class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border">
                    {{p.stock > 10 ? 'Disponible' : 'Stock Crítico'}}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop Gaming HP', category: 'Electrónica', stock: 15, price: 1200 },
    { id: 2, name: 'Monitor 24" Dell', category: 'Electrónica', stock: 8, price: 180 },
    { id: 3, name: 'Teclado Mecánico', category: 'Accesorios', stock: 50, price: 85 },
    { id: 4, name: 'Mouse Inalámbrico', category: 'Accesorios', stock: 5, price: 25 },
    { id: 5, name: 'Silla Ergonómica', category: 'Mobiliario', stock: 12, price: 250 },
  ];

  constructor(private pdfService: PdfService) { }

  downloadPdf() {
    this.pdfService.generateProductReport(this.products);
  }
}
