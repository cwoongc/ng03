import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRouteModule } from './app-route.module';

import { AppComponent } from './app.component';
import { HoistingComponent } from './hoisting/hoisting.component';
import { ArrayComponent } from './array/array.component';


@NgModule({
  declarations: [
    AppComponent,
    HoistingComponent,
    ArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
