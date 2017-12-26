import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, XHRBackend, RequestOptions, HttpModule, JsonpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HeaderComponent, FooterComponent, NgContentComponent } from './components/index';



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