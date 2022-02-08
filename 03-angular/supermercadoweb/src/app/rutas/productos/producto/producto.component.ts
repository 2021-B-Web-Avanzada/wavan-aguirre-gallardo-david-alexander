import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../../services/http/producto/producto.service";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProductoInterface} from "../../../services/http/interfaces/producto.interface";
import {ModalBorrarproductoComponent} from "../../../componentes/modales/modal-borrarproducto/modal-borrarproducto.component";
import{DatePipe} from "@angular/common";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  public _arrayProducts:ProductoInterface[]=[];
  public _arrayNombresMercados:Map<number,string> =new Map<number, string>();
  buscarProducto='';
  datePipe:DatePipe=new DatePipe('en-US');
  constructor(
    private readonly productService:ProductoService,
    private readonly mercadoService:SupermercadoService,
    private readonly router:Router,
    private readonly activatedRoute:ActivatedRoute,
    private readonly dialog:MatDialog
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$= this.activatedRoute
      .queryParams;
    parametrosConsulta$.subscribe(
      (queryParams)=>{
        console.log(queryParams);
        this.buscarProducto=queryParams['name'];
        this.buscarProductos();
      },
      (error)=>{},
      ()=>{}
    );
  }
  actualizarParametrosDeConsulta(){
    this.router.navigate(
      ['/productos','producto'],
      {
        queryParams:{
          name:this.buscarProducto//name=productName
        }
      }
    );
  }
  buscarProductos(){
    this.productService.buscarTodos({
      name: this.buscarProducto
    })
      .subscribe(
        (data)=>{
          console.log(data);
          this._arrayProducts=data;
          this.buscarProducto='';

        },
        (error)=>{
          console.log(error);
        },
        ()=>{
          this._arrayNombresMercados.clear();
          for (let producto of this._arrayProducts) {
            this.mercadoService.buscarUno(producto.fkMercado).subscribe(
              {
                next:(data)=>{

                  this._arrayNombresMercados.set(producto.idProducto,data.nombreMercado);
                }
              }
            );
          }
        }
      );
    //Rellenando arreglo de nombres de mercados para vista

  }
  eliminarProducto(idProducto?:number){
    this.productService.eliminarProducto(idProducto)
      .subscribe(
        (data)=>{
          this.buscarProductos();
        },
        (error)=>{
          console.log(error);
        }
      );

  }
  abrirDialogoConfirmacionEliminar(producto:ProductoInterface){
    const referenciaDialogo = this.dialog.open(
      ModalBorrarproductoComponent,
      {
        data:{
          nombreProducto:producto.nombreProducto,
          precio:producto.precio,
          categoria:producto.categoria,
          pesogr:producto.pesogr,
          caloriasgr:producto.caloriasgr,
          proveedor:producto.proveedor,
          stock:producto.stock,
          disponibilidad:producto.disponibilidad,
          fechaElab:producto.fechaElab,
          fechaVenc:producto.fechaVenc,
          fkMercado:producto.fkMercado
        }
      }
    );
    const despuesCerrad$ = referenciaDialogo.afterClosed();
    despuesCerrad$.subscribe(
      (datos)=>{
        if(datos){
          this.eliminarProducto(producto.idProducto)
        }
      }
    );
  }
  actualizarProducto(idProducto?:number){
    const ruta = ['/productos','actualizarproducto',idProducto];
    this.router.navigate(ruta);
  }
  obtenerNombreMercadoProducto(idMercado:number){
    this.mercadoService.buscarUno(idMercado)
      .subscribe(
        (datos)=>{
          console.log(datos);
          return datos.nombreMercado;
        },
        (error)=>{
          console.log(error);
        },
        ()=>{

        }
      )
  }
}
