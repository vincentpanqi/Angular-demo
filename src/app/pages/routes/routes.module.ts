
import { RoutesRoutingModule } from './routes.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { SigninComponent } from './signin/signin.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [
    RoutesComponent,
    SigninComponent,
    LazyLoadComponent
]
})
export class RoutesModule { }