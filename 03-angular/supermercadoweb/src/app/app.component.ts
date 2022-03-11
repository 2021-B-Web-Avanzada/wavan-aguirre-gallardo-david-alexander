import { Component } from '@angular/core';
import {SupermercadoService} from "./services/http/supermercado/supermercado.service";
import {ProductoService} from "./services/http/producto/producto.service";
import {SupermercadosComponent} from "./rutas/supermercados/supermercados.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supermercadoweb';

  constructor(
    private readonly supermercado:SupermercadoService,
    private readonly producto:ProductoService

  ) {

  }
  ngOnInit():void{
    // this.supermercado
    //   .buscarTodos()
    //   .subscribe({
    //     next:(datos)=>{
    //       console.log(datos);
    //     },
    //     error: (error)=>{
    //       console.error({error});
    //     },
    //   });
      this.producto.buscarTodos()
        .subscribe({
            next:(datos)=>{
              console.log(datos);
            },
          error: (error)=>{
              console.log({error});
          }
        }
        );
  }
  marcarMercadosComoActivo(){
    let mercadoNav = document.getElementById('mercadoNav');
    let productoNav = document.getElementById('productoNav');
    if(productoNav&&mercadoNav){
      if(productoNav.classList.contains("active")){
        productoNav.classList.remove('active');
        mercadoNav.classList.add("active");
      }
    }
  }
  marcarProductoComoActivo(){
    let mercadoNav = document.getElementById('mercadoNav');
    let productoNav = document.getElementById('productoNav');
    if(productoNav&&mercadoNav){
      if(mercadoNav.classList.contains("active")){
        mercadoNav.classList.remove('active');
        productoNav.classList.add("active");
      }
    }
  }
}
