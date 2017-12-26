import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';

import { PagesModule } from './pages/pages.module';

import { PreloadSelectedModules } from './shared/service/preview-load';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    // AppRoutingModule,
    PagesModule,
    RouterModule.forRoot(routes, { preloadingStrategy:  PreloadSelectedModules }),
  ],
  providers: [
    PreloadSelectedModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
