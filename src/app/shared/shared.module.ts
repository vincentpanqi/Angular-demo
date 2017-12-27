import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, XHRBackend, RequestOptions, HttpModule, JsonpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AuthorizationService } from './service/authorization.service';
import { CanVisitProvide } from './service/can-visit.provider';

import { HeaderComponent, FooterComponent, NgContentComponent } from './components/index';

const SHARED_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  NgContentComponent
]

const SHARED_SERVICE = [
  AuthorizationService,
  CanVisitProvide
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    HttpModule
  ],
  declarations: [ // 先声明
     ...SHARED_COMPONENTS
  ],
  providers: [
    ...SHARED_SERVICE
  ],
  exports: [ 
    ...SHARED_COMPONENTS,
    NgZorroAntdModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}