import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn:"root"
})
export class websocketsService{
  constructor(
    private socket:Socket
  ) {
  }
  ejecutarHola(){
    const resp = this.socket.emit('hola',{nombre:"Piedra"});
    console.log(resp);
  }
}
