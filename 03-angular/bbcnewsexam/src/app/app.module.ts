import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaprincipalComponent } from './componentes/noticiaprincipal/noticiaprincipal.component';
import { NoticiaEnfoqueComponent } from './componentes/noticia-enfoque/noticia-enfoque.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaprincipalComponent,
    NoticiaEnfoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
