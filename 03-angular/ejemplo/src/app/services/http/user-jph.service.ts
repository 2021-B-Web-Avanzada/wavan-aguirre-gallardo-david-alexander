import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UserJphInterface} from "./interfaces/user-jph.interface";
import {environment} from "../../../environments/environment";
import {UserJphCreateInterface} from "./interfaces/user-jph-create-interface";

@Injectable({
  providedIn: 'any'
})
export class UserJphService {

  constructor(private readonly httpClient:HttpClient) {

  }
  buscarTodos(paramsConsulta?:any):Observable<UserJphInterface[]>{
    const url = environment.urlJPC+'/users';
    Object
      .keys(paramsConsulta)
      .forEach( k =>{
        if(!paramsConsulta[k]){
          delete paramsConsulta[k]
        }
      })
    return this.httpClient
      .get(url,
        {
          params:paramsConsulta,
        }
        )
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as UserJphInterface[]
        )
      );
  }
  buscarUno(idUsuario:number):Observable<UserJphInterface>{
    const url = environment.urlJPC+'/users/'+idUsuario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData:Object)=>resultadoEnData as UserJphInterface
        )
      );
  }
  actualizarPorId(
    idUsuario:number,
    datosAActualizar:UserJphCreateInterface
  ):Observable<UserJphInterface>{
    const url = environment.urlJPC+'/users/'+idUsuario;
    return  this.httpClient
      .put(url,datosAActualizar)
      .pipe(map(
        (resultado)=> resultado as UserJphInterface
      ))
  }
}
