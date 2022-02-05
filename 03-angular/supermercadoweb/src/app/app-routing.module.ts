import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupermercadosComponent} from "./rutas/supermercados/supermercados.component";
import {RegistromercadoComponent} from "./rutas/supermercados/registromercado/registromercado.component";
import {MercadoComponent} from "./rutas/supermercados/mercado/mercado.component";

const routes: Routes = [
  {
    path:'supermercado',
    component:SupermercadosComponent,
    children:[
      {
        path:'mercado',
        component:MercadoComponent
      },
      {
        path:'registromercado',
        component:RegistromercadoComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
