import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RutaJuegoComponent} from "../../rutas/ruta-juego/ruta-juego.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-perdedor',
  templateUrl: './modal-perdedor.component.html',
  styleUrls: ['./modal-perdedor.component.scss']
})
export class ModalPerdedorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RutaJuegoComponent>,
    private readonly route:Router
  ) { }

  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe(
      {
        next:()=>{
          const ruta=["/home"];
          this.route.navigate(ruta);
        },
        complete:()=>{
          this.dialogRef.close();
        }
      }

    )
  }

}
