import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./services/websockets/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ejemplo';
  constructor(
    readonly webSocketService:WebsocketService
  ) {
  }
  eventoHola(){
    this.webSocketService.ejecutarEventoHola()
  }
  ngOnInit() {
    this.webSocketService.escucharEventoHola()
      .subscribe(
        {
          next:(data)=>{
            console.log(data);
          },
          error:(error)=>{
            console.log(error);
          }
        }
      )
  }
}
