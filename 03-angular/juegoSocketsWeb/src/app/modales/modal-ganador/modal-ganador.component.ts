import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RutaJuegoComponent} from "../../rutas/ruta-juego/ruta-juego.component";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-modal-ganador',
  templateUrl: './modal-ganador.component.html',
  styleUrls: ['./modal-ganador.component.scss']
})
export class ModalGanadorComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<RutaJuegoComponent>,
    private readonly router :Router
  ) { }

  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe(
      {
        next:()=>{
          const ruta=["/home"];
          this.router.navigate(ruta);
        },
        complete:()=>{
          this.dialogRef.close();
        }
      }
    )
  }

}
