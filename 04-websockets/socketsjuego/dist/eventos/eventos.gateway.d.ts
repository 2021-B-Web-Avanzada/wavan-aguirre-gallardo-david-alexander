import { Socket } from 'socket.io';
export declare class EventosGateWay {
    arregloSalasEnEspera: number[];
    minSalas: number;
    salaUnirse: number;
    player1: string;
    player2: string;
    devolverHola(message: {
        nombre: String;
    }, socket: Socket): string;
    unirseSala(message: {
        salaId: string;
        nombre: string;
    }, socket: Socket): any;
    presentarJugadores(message: {
        salaId: string;
        player1: string;
        player2: string;
    }, socket: Socket): string;
    enviarJugada(message: {
        idSala: string;
        jugador: string;
        jugada: string;
    }, socket: Socket): {
        idSala: string;
        jugador: string;
        jugada: string;
    };
    verificarDisponibilidadSala(idSala: number): boolean;
    generarIdSala(): number;
}
