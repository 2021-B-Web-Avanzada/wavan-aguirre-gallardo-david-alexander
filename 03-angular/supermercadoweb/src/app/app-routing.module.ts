import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupermercadosComponent} from "./rutas/supermercados/supermercados.component";
import {RegistromercadoComponent} from "./rutas/supermercados/registromercado/registromercado.component";
import {MercadoComponent} from "./rutas/supermercados/mercado/mercado.component";
import {ActualizarmercadoComponent} from "./rutas/supermercados/actualizarmercado/actualizarmercado.component";
import {ProductosComponent} from "./rutas/productos/productos.component";
import {ProductoComponent} from "./rutas/productos/producto/producto.component";
import {RegistroproductoComponent} from "./rutas/productos/registroproducto/registroproducto.component";
import {ActualizarproductoComponent} from "./rutas/productos/actualizarproducto/actualizarproducto.component";

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
      },
      {
        path:'actualizarmercado/:idMercado',
        component:ActualizarmercadoComponent
      }
    ]
  },
  {
    path:'productos',
    component: ProductosComponent,
    children:[
      {
        path: 'producto',
        component: ProductoComponent
      },
      {
        path: 'registroproducto',
        component: RegistroproductoComponent
      },
      {
        path: 'actualizarproducto',
        component: ActualizarproductoComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
