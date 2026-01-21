import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfService } from '../../services/pdf';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-container">
      <div class="header">
        <h2>Inventario de Productos</h2>
        <button class="btn-pdf" (click)="downloadPdf()">📄 Exportar PDF</button>
      </div>

      <table class="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of products">
            <td>{{p.id}}</td>
            <td>{{p.name}}</td>
            <td>{{p.category}}</td>
            <td>{{p.stock}}</td>
            <td>{{p.price | currency}}</td>
            <td>
              <span class="badge" [ngClass]="p.stock > 10 ? 'success' : 'warning'">
                {{p.stock > 10 ? 'En Stock' : 'Bajo Stock'}}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .list-container { padding: 1rem; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    .btn-pdf { background: #dc3545; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; }
    .btn-pdf:hover { background: #c82333; }
    
    .product-table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    th, td { padding: 1rem; text-align: left; border-bottom: 1px solid #eee; }
    th { background: #f8f9fa; font-weight: 600; color: #444; }
    tr:hover { background: #f8f9fa; }
    
    .badge { padding: 0.25rem 0.6rem; border-radius: 99px; font-size: 0.8rem; font-weight: 500; }
    .success { background: #d4edda; color: #155724; }
    .warning { background: #fff3cd; color: #856404; }
  `]
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
