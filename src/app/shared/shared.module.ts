import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, XHRBackend, RequestOptions, HttpModule, JsonpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpInterceptorService } from './service/http-interceptor';

import { HeaderComponent, FooterComponent, NgContentComponent } from './components/index';

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) {
  let service = new HttpInterceptorService(xhrBackend, requestOptions, router);
  return service;
}

const SHARED_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  NgContentComponent
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
    HttpInterceptorService,
    {
      provide: Http,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, Router]
    },
  ],
  exports: [ 
    ...SHARED_COMPONENTS
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}