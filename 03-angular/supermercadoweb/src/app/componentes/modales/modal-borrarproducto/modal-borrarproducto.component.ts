import {Component, Inject, OnInit} from '@angular/core';
import {ProductoInterface} from "../../../services/http/interfaces/producto.interface";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductoComponent} from "../../../rutas/productos/producto/producto.component";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {SupermercadoInterface} from "../../../services/http/interfaces/supermercado.interface";

@Component({
  selector: 'app-modal-borrarproducto',
  templateUrl: './modal-borrarproducto.component.html',
  styleUrls: ['./modal-borrarproducto.component.scss']
})
export class ModalBorrarproductoComponent implements OnInit {
  productoABorrar!:ProductoInterface;
  mercadoAsociado='';
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data : any,
    public dialogRef:MatDialogRef<ProductoComponent>,
    private readonly mercadoService:SupermercadoService
  ) { }

  ngOnInit(): void {
    if(this.data){
      this.productoABorrar=this.data;
      this.mercadoService.buscarUno(this.productoABorrar.fkMercado)
        .subscribe(
          (datos)=>{
            this.mercadoAsociado=datos.nombreMercado;
          },
          (erro)=>{
            console.log(erro);
          },
          ()=>{

          }
        )
    }
  }
  cerrarDialogo(){
    if(this.data){
      console.log("True de data");
    }
    this.dialogRef.close({nombre:'David'});
  }
}
