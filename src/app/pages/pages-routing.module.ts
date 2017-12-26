import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', // home
        loadChildren: 'app/pages/home/home.module#HomeModule'
      },
      {
        path: 'routes', // routes
        loadChildren: 'app/pages/routes/routes.module#RoutesModule'
      },
      // {
      //   path: '**',
      //   redirectTo: 'home'
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [PagesComponent]
})
export class PagesRoutingModule { }
