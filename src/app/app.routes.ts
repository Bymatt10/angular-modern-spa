import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { DashboardComponent } from './dashboard/dashboard';
import { ProductListComponent } from './inventory/product-list/product-list';
import { CategoryListComponent } from './inventory/category-list/category-list';
import { ReportsComponent } from './inventory/reports/reports';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'products', component: ProductListComponent },
            { path: 'categories', component: CategoryListComponent },
            { path: 'reports', component: ReportsComponent }
        ]
    }
];
