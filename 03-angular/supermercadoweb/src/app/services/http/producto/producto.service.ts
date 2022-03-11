import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ProductoInterface} from "../interfaces/producto.interface";
import {CreateproductoInterface} from "../interfaces/createproducto.interface";


@Injectable({
  providedIn: 'any'
})
export class ProductoService {

  constructor(
    private readonly httpCliente:HttpClient
  ) { }

  buscarTodos(paramsConsulta?:any):Observable<ProductoInterface[]>{
    const url = environment.urlAPI+'api/productoes/';
    if(!paramsConsulta){
      paramsConsulta='';
    }
    Object
      .keys(paramsConsulta)
      .forEach( k =>{
        if(!paramsConsulta[k]){
          delete paramsConsulta[k]
        }
      });
    return this.httpCliente.get(url,{params:paramsConsulta})
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as ProductoInterface[]
        )
      );
  }
  buscarUno(id?:number):Observable<ProductoInterface>{
    const url = environment.urlAPI+'api/productoes/'+id;
    return this.httpCliente.get(url)
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as ProductoInterface
        )
      );
  }
  registrarProducto(datosARegistrar:CreateproductoInterface):Observable<ProductoInterface>{
    const url = environment.urlAPI+'api/productoes';
    return this.httpCliente.post(url,datosARegistrar)
      .pipe(
        map(
          (resultado)=>resultado as ProductoInterface
        )
      );
  }
  eliminarProducto(id?:number){
    const url = environment.urlAPI+'api/productoes/'+id;
    return this.httpCliente.delete(url)
      .pipe(
        map(
          (resultado)=>resultado as ProductoInterface
        )
      );
  }
  actualizarPorId(datosActualizar:any,idProducto?:number):Observable<ProductoInterface>{
    const url  = environment.urlAPI+'api/productoes/'+idProducto;
    return this.httpCliente.put(url,datosActualizar)
      .pipe(
        map(
          (resultado)=>resultado as ProductoInterface
        )
      );
  }
}
