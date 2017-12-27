import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

import { CanVisitRoutes } from './can-visit.routing';
import { CanVisitComponent } from './can-visit.component';
import { CanAdminVisitComponent } from './can-admin-visit/can-admin-visit.component';
import { CanUserVisitComponent } from './can-user-visit/can-user-visit.component';
import { CanAnybodyVisitComponent } from './can-anybody-visit/can-anybody-visit.component';

const VISIT_COMPONENT = [
  CanVisitComponent,
  CanAdminVisitComponent,
  CanUserVisitComponent,
  CanAnybodyVisitComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CanVisitRoutes)
  ],
  declarations: [
    ...VISIT_COMPONENT
  ]
})
export class CanVisitModule { }