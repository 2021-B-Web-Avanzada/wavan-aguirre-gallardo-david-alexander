import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SupermercadoInterface} from "../interfaces/supermercado.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ProductoInterface} from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private readonly httpCliente:HttpClient
  ) { }

  buscarTodos():Observable<ProductoInterface[]>{
    const url = environment.urlAPI+'api/productoes';
    return this.httpCliente.get(url)
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as ProductoInterface[]
        )
      );
  }
  buscarUno(id:number):Observable<ProductoInterface>{
    const url = environment.urlAPI+'api/productoes/'+id;
    return this.httpCliente.get(url)
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as ProductoInterface
        )
      );
  }
}
