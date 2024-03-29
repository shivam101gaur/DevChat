import { Routes } from '@angular/router';
import { authGuard } from '@src/app/guards/auth.guard';
import { homeGuard } from '@src/app/guards/home.guard';

export const appModuleRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivate:[ authGuard ]
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [homeGuard]
    },
    // { path:'**',redirectTo:'auth' }
];
