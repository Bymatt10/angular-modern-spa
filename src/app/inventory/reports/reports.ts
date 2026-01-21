import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfService } from '../../services/pdf';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Centro de Reportes</h2>
        <p class="text-gray-500 text-sm">Genera y descarga informes estadísticos de tu inventario</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-blue-500/20">
          <p class="text-blue-100 text-sm font-medium mb-1">Total Productos</p>
          <h3 class="text-3xl font-bold">1,250</h3>
          <div class="mt-4 text-xs text-blue-100 flex items-center gap-1">
            <span class="bg-blue-500 py-0.5 px-1.5 rounded">+12%</span> desde el mes pasado
          </div>
        </div>
        <div class="bg-emerald-500 text-white p-6 rounded-2xl shadow-lg shadow-emerald-500/20">
          <p class="text-emerald-100 text-sm font-medium mb-1">Valor Inventario</p>
          <h3 class="text-3xl font-bold">$45,200</h3>
          <div class="mt-4 text-xs text-emerald-100 flex items-center gap-1">
            <span class="bg-emerald-400 py-0.5 px-1.5 rounded">+5.4%</span> crecimiento
          </div>
        </div>
        <div class="bg-amber-500 text-white p-6 rounded-2xl shadow-lg shadow-amber-500/20">
          <p class="text-amber-100 text-sm font-medium mb-1">Stock Bajo</p>
          <h3 class="text-3xl font-bold">12</h3>
          <div class="mt-4 text-xs text-amber-100 flex items-center gap-1">
            <span class="bg-amber-400 py-0.5 px-1.5 rounded">Alertas</span> requiere atención
          </div>
        </div>
        <div class="bg-purple-600 text-white p-6 rounded-2xl shadow-lg shadow-purple-500/20">
          <p class="text-purple-100 text-sm font-medium mb-1">Categorías</p>
          <h3 class="text-3xl font-bold">8</h3>
          <div class="mt-4 text-xs text-purple-100 flex items-center gap-1">
            <span class="bg-purple-500 py-0.5 px-1.5 rounded">Activas</span> bien distribuido
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div class="p-6 border-bottom border-gray-100">
          <h3 class="text-lg font-bold text-gray-800">Reportes Disponibles</h3>
        </div>
        <div class="divide-y divide-gray-100">
          <div class="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
              <div>
                <h4 class="font-semibold text-gray-800">Inventario General Completo</h4>
                <p class="text-gray-500 text-sm italic">Incluye todos los productos, stock actual y valoración total.</p>
              </div>
            </div>
            <button (click)="generateMainReport()" class="text-blue-600 font-semibold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">Descargar</button>
          </div>
          <div class="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold">PDF</div>
              <div>
                <h4 class="font-semibold text-gray-800">Alerta de Stock Crítico</h4>
                <p class="text-gray-500 text-sm italic">Sólo productos con menos de 10 unidades disponibles.</p>
              </div>
            </div>
            <button (click)="generateMainReport()" class="text-blue-600 font-semibold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">Descargar</button>
          </div>
          <div class="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">XLS</div>
              <div>
                <h4 class="font-semibold text-gray-800">Resumen por Categorías</h4>
                <p class="text-gray-500 text-sm italic">Exportación detallada para análisis en Excel.</p>
              </div>
            </div>
            <button class="text-gray-400 font-semibold cursor-not-allowed px-4 py-2 rounded-lg">Próximamente</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ReportsComponent {
  mockProducts = [
    { id: 1, name: 'Laptop Gaming HP', category: 'Electrónica', stock: 15, price: 1200 },
    { id: 2, name: 'Monitor 24" Dell', category: 'Electrónica', stock: 8, price: 180 },
    { id: 3, name: 'Teclado Mecánico', category: 'Accesorios', stock: 50, price: 85 },
  ];

  constructor(private pdfService: PdfService) { }

  generateMainReport() {
    this.pdfService.generateProductReport(this.mockProducts);
  }
}
