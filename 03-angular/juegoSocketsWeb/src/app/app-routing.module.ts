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
    path:"juego/:player1/:player2",
    component:RutaJuegoComponent
  },
  {
    path:"juego",
    component:RutaJuegoComponent
  },
  {
    path:"",
    component:RutaHomejuegoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
