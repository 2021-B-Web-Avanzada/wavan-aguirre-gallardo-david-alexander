import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
@WebSocketGateway(
    8080,
    {
        cors:{
            origin:'*',
        },
    })
export class EventosGateWay{
    arregloSalasEnEspera:number[]=[];
    minSalas:number=0;
    salaUnirse=0;
    player1="";
    player2="";
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
            message:{nombre:String},
        @ConnectedSocket()
            socket:Socket
    ){
        console.log(socket.id);
        socket.broadcast.emit('escucharEventoHola',{mensaje:'Bienvenido'+message.nombre});
        return 'ok';
    }
    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
        message:{salaId:string,nombre:string},
        @ConnectedSocket()
        socket:Socket
    ){
        if(this.arregloSalasEnEspera.length>0){
            this.salaUnirse=this.arregloSalasEnEspera[0];
            this.player2=message.nombre;
            this.arregloSalasEnEspera.pop();
            socket.join(this.salaUnirse.toString());
        }else{
            this.player1=message.nombre;
            this.salaUnirse=this.generarIdSala();
            this.arregloSalasEnEspera.push(this.salaUnirse);
            socket.join(this.salaUnirse.toString());
        }
        console.log(this.arregloSalasEnEspera);
        const mensaje = {
            idSala:this.salaUnirse,
            player1:this.player1,
            player2:this.player2
        }as any;
        socket.broadcast.to(this.salaUnirse.toString())
            .emit('escucharEventoUnirseSala',mensaje);
        return mensaje;
    }
    @SubscribeMessage('presentarJugadores')
    presentarJugadores(
        @MessageBody()
        message:{salaId:string,player1:string,player2:string},
        @ConnectedSocket()
        socket:Socket
    ):string{
        const mensaje={
            idSala:this.salaUnirse,
            player1:this.player1,
            player2:this.player2
        } as any;
        console.log(mensaje);
        socket.broadcast.to(this.salaUnirse.toString()).emit('escucharEventoPresentarJugadores',mensaje);
        return mensaje.toString();
    }
    @SubscribeMessage('enviarJugada')
    enviarJugada(
        @MessageBody()
        message:{idSala:string,jugador:string,jugada:string},
        @ConnectedSocket()
        socket:Socket
    ){
        console.log("Enviar jugada:",message);
        socket.broadcast.to(message.idSala).emit('escucharEventoJugada',message);
        return message;
    }
    //Funciones backend
    verificarDisponibilidadSala(idSala:number):boolean{
        let indice=this.arregloSalasEnEspera.indexOf(idSala,0);
        if(indice===-1){
            return false;
        }else{
            return true;
        }
    }
    generarIdSala():number{
        this.minSalas=this.minSalas+1;
        return this.minSalas;
    }

}