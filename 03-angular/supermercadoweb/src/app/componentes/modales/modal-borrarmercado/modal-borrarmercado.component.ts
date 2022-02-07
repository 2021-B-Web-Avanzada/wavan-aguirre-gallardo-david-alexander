import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MercadoComponent} from "../../../rutas/supermercados/mercado/mercado.component";
import {SupermercadoInterface} from "../../../services/http/interfaces/supermercado.interface";


@Component({
  selector: 'app-modal-borrarmercado',
  templateUrl: './modal-borrarmercado.component.html',
  styleUrls: ['./modal-borrarmercado.component.scss']
})
export class ModalBorrarmercadoComponent implements OnInit {
  mercadoABorrar!:SupermercadoInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data : any,
    public dialogRef:MatDialogRef<MercadoComponent>
  ) { }

  ngOnInit(): void {
    if(this.data){
      this.mercadoABorrar=this.data;
    }
  }
  cerrarDialogo(){
    if(this.data){
      console.log("True de data");
    }
    this.dialogRef.close({nombre:'David'});
  }

}
