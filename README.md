# Modern Angular Inventory System SPA

Una aplicación de gestión de inventarios completa, moderna y reactiva construida con **Angular 17+**.

## Características 🌟
- **Autenticación**: Login y Registro simulados (Mock Auth).
- **Dashboard**: Layout responsivo con barra lateral de navegación.
- **Gestión de Inventario**: Visualización de productos en tablas dinámicas.
- **Reportes PDF**: Generación de reportes de inventario exportables a PDF usando `jspdf`.
- **Arquitectura Basada en Componentes**: Standalone Components y Signals.
- **Routing**: Rutas protegidas y lazy loading.

## Tecnologías Utilizadas
- Angular 17+ (Standalone APIs)
- TypeScript
- RxJS
- jsPDF & jsPDF-AutoTable (Exportación)

## Cómo ejecutar 🚀
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   ng serve
   ```
3. Visita `http://localhost:4200/`.
   - **Login Demo**: Usa cualquier email/password.

## Funcionalidades Clave implementadas
- `/login`: Formulario de acceso.
- `/register`: Formulario de registro.
- `/dashboard/products`: Lista de inventario con stock en tiempo real y botón de exportar PDF.
