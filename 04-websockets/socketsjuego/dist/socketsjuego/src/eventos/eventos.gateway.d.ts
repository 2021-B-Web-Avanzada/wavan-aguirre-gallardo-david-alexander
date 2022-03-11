import { Socket } from 'socket.io';
export declare class EventosGateWay {
    devolverHola(message: {
        nombre: String;
    }, socket: Socket): string;
    unirseSala(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): string;
}
