import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupermercadosComponent} from "./rutas/supermercados/supermercados.component";

const routes: Routes = [
  {
    path:'supermercado',
    component:SupermercadosComponent,
    children:[
      {
        path:'mercado',
        component:SupermercadosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
