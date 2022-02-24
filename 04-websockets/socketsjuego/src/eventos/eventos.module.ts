import{Module} from "@nestjs/common";
import {EventosGateway} from "../../../websockets/src/eventos/eventos.gateway";

@Module({
    providers:[EventosGateway],
})
export class EventosModule{

}