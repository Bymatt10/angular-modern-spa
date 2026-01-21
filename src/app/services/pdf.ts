import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  generateProductReport(products: any[]) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Reporte de Inventario', 14, 22);
    doc.setFontSize(11);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 30);

    const head = [['ID', 'Producto', 'Categoría', 'Stock', 'Precio']];
    const data = products.map(p => [p.id, p.name, p.category, p.stock, `$${p.price}`]);

    autoTable(doc, {
      head: head,
      body: data,
      startY: 40,
      theme: 'grid',
    });

    doc.save('inventario.pdf');
  }
}
