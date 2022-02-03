import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {SupermercadoInterface} from "../interfaces/supermercado.interface";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'any'
})
export class SupermercadoService {

  constructor(
    private readonly httpCliente:HttpClient
  ) {

  }
  buscarTodos():Observable<SupermercadoInterface[]>{
    const url = environment.urlAPI+'api/mercadoes';
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as SupermercadoInterface[]
        )
      )

  }
  buscarUno(id:number):Observable<SupermercadoInterface>{
    const url = environment.urlAPI+'api/mercadoes/'+id;
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as SupermercadoInterface
        )
      )
  }
}
