import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocketIoModule} from "ngx-socket-io";
import { RutaHomejuegoComponent } from './rutas/ruta-homejuego/ruta-homejuego.component';
import { RutaJuegoComponent } from './rutas/ruta-juego/ruta-juego.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ModalCargandoComponent } from './modales/modal-cargando/modal-cargando.component';
import { ModalGanadorComponent } from './modales/modal-ganador/modal-ganador.component';
import { ModalPerdedorComponent } from './modales/modal-perdedor/modal-perdedor.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomejuegoComponent,
    RutaJuegoComponent,
    ModalCargandoComponent,
    ModalGanadorComponent,
    ModalPerdedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(
      {
        url:"ws://localhost:8080",
        options:{}
      }
    ),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
