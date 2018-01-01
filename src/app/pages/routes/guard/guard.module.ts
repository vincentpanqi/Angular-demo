import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GuardRoutes } from './guard.routing';
import { GuardComponent } from './guard.component';
import { CanAdminVisitComponent } from './can-admin-visit/can-admin-visit.component';
import { CanUserVisitComponent } from './can-user-visit/can-user-visit.component';
import { CanAnybodyVisitComponent } from './can-anybody-visit/can-anybody-visit.component';

import { ROLE_INFO } from './../../../shared/service/static-role-info.providers';

const GUARD_COMPONENT = [
  GuardComponent,
  CanAdminVisitComponent,
  CanUserVisitComponent,
  CanAnybodyVisitComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GuardRoutes)
  ],
  declarations: [
    ...GUARD_COMPONENT
  ]

})
export class GuardModule { }