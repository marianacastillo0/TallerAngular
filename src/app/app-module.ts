import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {CoursesModule} from './courses/courses-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
