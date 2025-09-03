import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'giphy-details',
    loadComponent: () => import('./giphy-details/giphy-details.page').then( m => m.GiphyDetailsPage)
  },
];
