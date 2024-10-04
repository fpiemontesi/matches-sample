import { Routes } from '@angular/router';
import { MatchesViewComponent } from './matches-view/matches-view.component';
import { MatchSelectorComponent } from './match-selector/match-selector.component';
import { MatchFormComponent } from './match-form/match-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'list', component: MatchesViewComponent },
    { path: 'form', component: MatchFormComponent },
    { path: 'selected/:id', component: MatchSelectorComponent },
    {
        path: 'reports',
        loadComponent: () => import('./match-reports/match-reports.component').then(c => c.MatchReportsComponent)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin.routes').then(r => r.ADMIN_ROUTES)
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];