import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SupermercadoService} from "./services/http/supermercado/supermercado.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductoService} from "./services/http/producto/producto.service";
import { SupermercadosComponent } from './rutas/supermercados/supermercados.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SupermercadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SupermercadoService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
