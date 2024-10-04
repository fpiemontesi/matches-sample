import { Routes } from "@angular/router";
import { AdminDetailComponent } from "./admin-detail/admin-detail.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

export const ADMIN_ROUTES: Routes = [
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'detail', component: AdminDetailComponent },
];