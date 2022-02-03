import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SupermercadoService} from "./services/http/supermercado/supermercado.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductoService} from "./services/http/producto/producto.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SupermercadoService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
