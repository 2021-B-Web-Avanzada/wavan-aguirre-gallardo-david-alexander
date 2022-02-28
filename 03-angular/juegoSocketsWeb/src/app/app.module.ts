import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocketIoModule} from "ngx-socket-io";
import { RutaHomejuegoComponent } from './rutas/ruta-homejuego/ruta-homejuego.component';
import { RutaJuegoComponent } from './rutas/ruta-juego/ruta-juego.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RutaHomejuegoComponent,
    RutaJuegoComponent
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
