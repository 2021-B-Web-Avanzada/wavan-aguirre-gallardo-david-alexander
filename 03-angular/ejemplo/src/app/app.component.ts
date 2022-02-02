import { Component } from '@angular/core';
import {WebsocketService} from "./services/websockets/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplo';
  constructor(
    readonly webSocketService:WebsocketService
  ) {
  }
  eventoHola(){
    this.webSocketService.ejecutarEventoHola()

  }
}
