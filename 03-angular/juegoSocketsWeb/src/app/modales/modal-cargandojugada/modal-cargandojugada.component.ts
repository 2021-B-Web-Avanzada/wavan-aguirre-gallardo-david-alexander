import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {websocketsService} from "../../services/websockets/websockets.service";
import {MatDialogRef} from "@angular/material/dialog";
import {RutaJuegoComponent} from "../../rutas/ruta-juego/ruta-juego.component";

@Component({
  selector: 'app-modal-cargandojugada',
  templateUrl: './modal-cargandojugada.component.html',
  styleUrls: ['./modal-cargandojugada.component.scss']
})
export class ModalCargandojugadaComponent implements OnInit {
  llegoJugadaRetador=false;
  constructor(
    private readonly webSocketService: websocketsService,
    public dialogRef:MatDialogRef<RutaJuegoComponent>
  ) { }

  ngOnInit(): void {
    const respuestaEscucharEventoRealizarJugada = this.webSocketService.escucharEventoRealizarJugada()
      .subscribe(
        {
          next: (data: any) => {
            console.log("evento mensaje jugada =", data);
            this.llegoJugadaRetador = true;
            this.dialogRef.close()
          },
          error: (error) => {

          }
        }
      )
  }

}
