import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
   {
      path: '',
      component: Home,
   },
   {
      path: 'placeholders',
      loadChildren: () =>
         import('./placeholders/placeholders.routes').then((m) => m.PlaceholdersRoutes),
   },
   {
      path: 'tables',
      loadChildren: () => import('./tables/tables.routes').then((m) => m.TablesRoutes),
   },
   {
      path: 'lists',
      loadChildren: () => import('./lists/lists.routes').then((m) => m.ListsRoutes),
   },
   {
      path: 'popups',
      loadChildren: () => import('./popups/popups.routes').then((m) => m.PopupsRoutes),
   },
   {
      path: '**',
      component: NotFound,
   },
];
