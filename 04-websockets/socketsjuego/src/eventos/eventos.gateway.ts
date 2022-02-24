import{WebSocketGateway} from "@nestjs/websockets";
@WebSocketGateway(
    8080,
    {
        cors:{
            origin:"*",
        },
    })
export class EventosGateWay{

}