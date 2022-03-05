import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RutaJuegoComponent} from "../../rutas/ruta-juego/ruta-juego.component";
import {environment} from "../../../environments/environment";
import {websocketsService} from "../../services/websockets/websockets.service";

@Component({
  selector: 'app-modal-cargando',
  templateUrl: './modal-cargando.component.html',
  styleUrls: ['./modal-cargando.component.scss']
})
export class ModalCargandoComponent implements OnInit {
  entroADialog=true
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    public dialogRef:MatDialogRef<RutaJuegoComponent>,
    private readonly webSocketService:websocketsService
  ) { }

  ngOnInit(): void {
    const respuestaEscucharEventoPresentarJugadores$=this.webSocketService.escucharEventoPresentarJugadores()
      .subscribe(
        {
          next:(data:any)=>{
            console.log("escucharevento presentar jugadores modal:",data);
            this.entroADialog=false
            this.dialogRef.close()
          },
          error:(error:any)=>{
            console.log(error);
          }
        }
      );
    const respuestaEscucharEventoUnirseSala$= this.webSocketService.escucharEventoUnirseSala()
      .subscribe(
        {
          next:(data:any)=>{
            environment.llegoAlguien=true;
            console.log("Alguien entro modal ",data);
            this.dialogRef.close()
          },
          error:(error)=>{
            console.error({error});
          },
          complete:()=>{

          }
        }
      );
  }

}
