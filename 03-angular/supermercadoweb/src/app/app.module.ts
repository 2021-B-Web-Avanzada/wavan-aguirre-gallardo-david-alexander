import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SupermercadoService} from "./services/http/supermercado/supermercado.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductoService} from "./services/http/producto/producto.service";
import { SupermercadosComponent } from './rutas/supermercados/supermercados.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistromercadoComponent } from './rutas/supermercados/registromercado/registromercado.component';
import { MercadoComponent } from './rutas/supermercados/mercado/mercado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ModalBorrarmercadoComponent } from './componentes/modales/modal-borrarmercado/modal-borrarmercado.component';
import {MatButtonModule} from "@angular/material/button";
import { ActualizarmercadoComponent } from './rutas/supermercados/actualizarmercado/actualizarmercado.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermercadosComponent,
    RegistromercadoComponent,
    MercadoComponent,
    ModalBorrarmercadoComponent,
    ActualizarmercadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    SupermercadoService,
    ProductoService,
    ModalBorrarmercadoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
