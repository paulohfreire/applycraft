import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing-page/landing-page').then(({ LandingPage }) => LandingPage),
    title: 'ApplyCraft — A system for your job search',
  },
  { path: '**', redirectTo: '' },
];
