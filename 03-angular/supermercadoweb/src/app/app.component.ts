import { Component } from '@angular/core';
import {SupermercadoService} from "./services/http/supermercado/supermercado.service";
import {ProductoService} from "./services/http/producto/producto.service";

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
}
