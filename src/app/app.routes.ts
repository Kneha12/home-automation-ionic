import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'room-detail',
    loadComponent: () => import('./pages/home/room-detail/room-detail.page').then( m => m.RoomDetailPage)
  },
 
];
