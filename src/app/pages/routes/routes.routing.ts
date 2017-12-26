/***
 * 此为路由介绍的模块，包括：
 * @param   懒加载
 * 
 * 
 * 
 * */ 
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RoutesComponent } from './routes.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { 
    path: '',
    component: RoutesComponent,
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: ''
      }

    ]
   },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoutesRoutingModule { }
