import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaHomejuegoComponent} from "./rutas/ruta-homejuego/ruta-homejuego.component";
import {RutaJuegoComponent} from "./rutas/ruta-juego/ruta-juego.component";

const routes: Routes = [
  {
    path:"home",
    component:RutaHomejuegoComponent
  },
  {
    path:"juego",
    component:RutaJuegoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
