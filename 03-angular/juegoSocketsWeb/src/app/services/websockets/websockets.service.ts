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
  ejecutarEventoHola(){
    const resp = this.socket.emit('hola',{
      nombre:'David'
    });
    console.log(resp);
  }
  escucharEventoHola(){
    return this.socket.fromEvent('escucharEventoHola');
  }
  ejecutarEventoUnirseSala(salaId:number,nombre:string,nombre2:string){
    const respuesta = this.socket.emit('unirseSala',{
      nombre:nombre,
      salaId
    });
    console.log("respuesta" ,respuesta);
  }
  ejecutarEventoPresentarJugadores(salaId:string,player1:string,player2:string){
    const respuesta = this.socket.emit('presentarJugadores',{
      salaId:salaId,
      player1:player1,
      player2:player2
    });

    console.log("Respuesta presentar jugadores ", respuesta);
  }
  ejecutarEventoRealizarJugada(mensaje:any){
    const respuesta = this.socket.emit('enviarJugada',mensaje);
    console.log(respuesta);
  }
  escucharEventoUnirseSala(){
    return this.socket.fromEvent('escucharEventoUnirseSala')
  }
  escucharEventoPresentarJugadores(){
    return this.socket.fromEvent('escucharEventoPresentarJugadores')
  }
  escucharEventoRealizarJugada(){
    return this.socket.fromEvent('escucharEventoJugada');
  }
}
