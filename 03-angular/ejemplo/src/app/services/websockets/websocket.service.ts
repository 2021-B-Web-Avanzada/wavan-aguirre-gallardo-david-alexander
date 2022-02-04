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
  ejecutarEventoHola():Observable<any>{
    return this.socket.emit('Hola',{
      nombre:'David'
    });
  }
}