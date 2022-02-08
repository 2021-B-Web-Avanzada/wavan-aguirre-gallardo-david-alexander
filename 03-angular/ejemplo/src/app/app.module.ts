import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import {AuthService} from "./services/auth/authservice";
import {EstaLogeadoGuard} from "./services/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./services/auth/esadministrador.guard";
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {BannerImagenesComponent} from "./componentes/banner-imagenes/banner-imagenes/banner-imagenes.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaUsuarioPerfilComponent } from './rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import {KnobModule} from "primeng/knob";
import {SplitButton, SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { ModalEjemploComponent } from './componentes/modales/modal-ejemplo/modal-ejemplo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {NgbButtonsModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SocketIoModule} from "ngx-socket-io";


@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaNotFoundComponent,
    RutaForbiddenComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent,
    RutaUsuarioPerfilComponent,
    ModalEjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ButtonModule,
    KnobModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    NgbButtonsModule,
    SocketIoModule.forRoot({
      url:'ws://localhost:8080',
      options:{}
    })
  ],
  //servicios
  providers: [
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard
  ],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
