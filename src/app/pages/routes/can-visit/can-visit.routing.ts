import { Routes, RouterModule } from '@angular/router';

import { CanVisitProvide } from './../../../shared/service/can-visit.provider';

import { CanVisitComponent } from './can-visit.component';
import { CanAdminVisitComponent } from './can-admin-visit/can-admin-visit.component';
import { CanUserVisitComponent } from './can-user-visit/can-user-visit.component';
import { CanAnybodyVisitComponent } from './can-anybody-visit/can-anybody-visit.component';

export const CanVisitRoutes: Routes = [
  {  
    path: '',
    component: CanVisitComponent,
    children: [
      {
        path: '',
        redirectTo: 'anybody',
        pathMatch: 'full'
      },
      {
        path: 'anybody',
        component: CanAnybodyVisitComponent
       
      },
      {
        path: 'admin',
        component: CanAdminVisitComponent
      },
      {
        path: 'user',
        component: CanUserVisitComponent,
        canActivate: [ CanVisitProvide ],
        canLoad: [ CanVisitProvide ]
      }
    ]
  }
  
];

