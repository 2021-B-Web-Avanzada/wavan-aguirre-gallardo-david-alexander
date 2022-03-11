import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RutaJuegoComponent} from "../../rutas/ruta-juego/ruta-juego.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-empate',
  templateUrl: './modal-empate.component.html',
  styleUrls: ['./modal-empate.component.scss']
})
export class ModalEmpateComponent implements OnInit {

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
