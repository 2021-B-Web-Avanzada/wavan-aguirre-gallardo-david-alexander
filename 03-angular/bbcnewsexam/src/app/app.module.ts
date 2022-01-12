import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaprincipalComponent } from './componentes/noticiaprincipal/noticiaprincipal.component';
import { NoticiaEnfoqueComponent } from './componentes/noticia-enfoque/noticia-enfoque.component';
import { EnfoquemultiminiComponent } from './componentes/enfoquemultimini/enfoquemultimini.component';
import { FilasmininoticiasComponent } from './componentes/filasmininoticias/filasmininoticias.component';
import { NoticiatipoComponent } from './componentes/noticiatipo/noticiatipo.component';
import { SeparadorTiposComponent } from './componentes/separador-tipos/separador-tipos.component';
import { PrefooterComponent } from './componentes/prefooter/prefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaprincipalComponent,
    NoticiaEnfoqueComponent,
    EnfoquemultiminiComponent,
    FilasmininoticiasComponent,
    NoticiatipoComponent,
    SeparadorTiposComponent,
    PrefooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
