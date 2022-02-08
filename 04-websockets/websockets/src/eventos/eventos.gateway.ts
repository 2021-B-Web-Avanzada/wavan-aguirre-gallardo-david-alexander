import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
@WebSocketGateway(
    8080,
    {
        cors:{
            origin: '*',
        },
    }
)
export class EventosGateway{
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
}