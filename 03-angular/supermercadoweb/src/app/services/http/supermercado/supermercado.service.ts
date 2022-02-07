import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {SupermercadoInterface} from "../interfaces/supermercado.interface";
import {environment} from "../../../../environments/environment";
import {CreatemercadoInterface} from "../interfaces/createmercado.interface";
import {ActualizarmercadoInterface} from "../interfaces/actualizarmercado.interface";

@Injectable({
  providedIn: 'any'
})
export class SupermercadoService {

  constructor(
    private readonly httpCliente:HttpClient
  ) {

  }
  buscarTodos(paramsConsulta?:any):Observable<SupermercadoInterface[]>{
    const url = environment.urlAPI+'api/mercadoes/';
    Object
      .keys(paramsConsulta)
      .forEach( k =>{
        if(!paramsConsulta[k]){
          delete paramsConsulta[k]
        }
      });
    return this.httpCliente
      .get(url,
        {
          params:paramsConsulta
        }
        )
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as SupermercadoInterface[]
        )
      );

  }
  buscarUno(id:number):Observable<SupermercadoInterface>{
    const url = environment.urlAPI+'api/mercadoes/'+id;
    console.log(url);
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as SupermercadoInterface
        )
      )
  }
  registrarMercado(datosARegistrar:CreatemercadoInterface):Observable<SupermercadoInterface>{
    const url = environment.urlAPI+'api/mercadoes';
    return this.httpCliente.post(
      url, datosARegistrar
    ).pipe(
      map(
        (resultado)=> resultado as SupermercadoInterface
      )
    );
  }
  eliminarMercado(id?:number){
    const url = environment.urlAPI+'api/mercadoes/'+id;

    return this.httpCliente.delete(
      url
    ).pipe(
      map(
        (resultado)=>{
          resultado as SupermercadoInterface
        }
      )
    );
  }
  actualizarPorId(datosAActualizar:any,idMercado?:number):Observable<SupermercadoInterface>{
    const url = environment.urlAPI+'api/mercadoes/'+idMercado;
    console.log(datosAActualizar);
    return this.httpCliente
      .put(url,datosAActualizar)
      .pipe(
        map(
          (resultado)=> resultado as SupermercadoInterface
        )
      );
  }
}
