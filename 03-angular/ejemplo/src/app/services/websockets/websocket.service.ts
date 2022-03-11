import {Inject, Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class WebsocketService{
  constructor(
    private socket:Socket
  ) {
  }
  ejecutarEventoHola(){
    const resp = this.socket.emit('hola',{
      nombre:'David'
    });
    console.log(resp);
  }
  escucharEventoHola(){
    return this.socket.fromEvent('escucharEventoHola');
  }
  ejecutarEventoUnirseSala(salaId:number,nombre:string){
    //Emitimos un evento
    const resp = this.socket.emit(
      'unirseSala',{
        nombre:nombre,
        salaId
      }
    );
    console.log(resp);
  }
  ejecutarEventoEnviarMensaje(salaId:number,nombre:string,mensaje:string){
    //Emitimos un evento
    const resp = this.socket.emit(
      'enviarMensaje',{
        nombre:nombre,
        salaId,
        mensaje
      }
    );
    console.log(resp);
  }
  escucharEventoUnirseSala(){
    return this.socket.fromEvent('escucharEventoUnirseSala')
  }
  escucharEventoMensajeSala(){
    return this.socket.fromEvent('escucharEventoMensajeSala')
  }
}
