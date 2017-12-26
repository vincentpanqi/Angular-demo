import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

// Pages routing
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { PagesComponent } from './pages.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
