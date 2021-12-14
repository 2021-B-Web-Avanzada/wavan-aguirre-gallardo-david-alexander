import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaAppComponent} from "./rutas/ruta-app/ruta-app.component";
import {RutaPostComponent} from "./rutas/ruta-post/ruta-post.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";


//Login
//Inicio
//App
  //usuario
  //user
//configuracion


const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent,
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent,
  },
  {
    path:'inicio',
    component:RutaInicioComponent
  },
  {
    path:'app',
    component:RutaAppComponent,
    children:[
      {
        path:'post',
        component:RutaPostComponent
      },
      {
        path:'usuario',
        component:RutaUsuarioComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full',
  },
  {
    path: '**',
    component:RutaNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
