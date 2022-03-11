import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../../services/http/producto/producto.service";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SupermercadoInterface} from "../../../services/http/interfaces/supermercado.interface";
import {ProductoInterface} from "../../../services/http/interfaces/producto.interface";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-actualizarproducto',
  templateUrl: './actualizarproducto.component.html',
  styleUrls: ['./actualizarproducto.component.scss']
})
export class ActualizarproductoComponent implements OnInit {
  formGroup!:FormGroup;
  datePipe:DatePipe=new DatePipe('en-US');
  arrayCategorias=[
    "Golosinas","Licores","Energizantes","Viveres","Perfumes",
    "Electrodomesticos","Aseo Personal","Carnes","Embutidos",
    "Postres","Frutas","Ropa"
  ]
  arrayMercados!:SupermercadoInterface[];
  productoActual?:ProductoInterface;
  idProducto = 0;
  constructor(
    private readonly formBuilder:FormBuilder,
    private readonly activatedRoute:ActivatedRoute,
    private readonly mercadoService:SupermercadoService,
    private readonly productoService:ProductoService,
    private readonly router:Router,

  ) { }

  ngOnInit(): void {
    const params$ = this.activatedRoute.params;
    params$.subscribe(
      {
        next:(parametrosRuta)=>{
          this.idProducto= +parametrosRuta['idProducto'];
          this.buscarProductoPorId(this.idProducto);
        }
      }
    );
    this.mercadoService.buscarTodos('').subscribe(
      (datos)=>{
        console.log(datos);
        this.arrayMercados=datos;
      },
      ()=>{

      },
      ()=>{

      }
    );
    this.prepararFormulario();
  }

  buscarProductoPorId(idProducto:number){
    const buscarProducto$ = this.productoService.buscarUno(idProducto);
    buscarProducto$.subscribe(
      {
        next:(datos)=>{
          console.log(datos);
          this.productoActual=datos;
          this.prepararFormulario();
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }
  prepararFormulario(){
    let formattedDate = this.datePipe.transform(this.productoActual?.fechaElab, 'YYYY-MM-dd');
    let fechaVencFormated = this.datePipe.transform(this.productoActual?.fechaVenc,"YYYY-MM-dd");
    let categoria='';
    if(this.productoActual?.categoria){
       categoria=this.productoActual.categoria.trim();
    }
    this.formGroup=this.formBuilder.group(
      {
        nombreProducto: new FormControl(
          {
            value:this.productoActual?.nombreProducto.trim(),
            disabled:false
          },
          [
            Validators.pattern("[a-zA-Z]+([\\s][a-zA-Z]*)*"),
            Validators.minLength(3),
            Validators.required
          ]
        ),
        precio:new FormControl(
          {
            value:this.productoActual?.precio,
            disabled:false
          },
          [
            Validators.min(0.01),
            Validators.required
          ]
        ),
        categoria:new FormControl(
          {
            value:this.arrayCategorias.indexOf(categoria),
            disabled:false
          },
          [
            Validators.required
          ]
        ),
        pesogr:new FormControl(
          {
            value:this.productoActual?.pesogr,
            disabled:false
          },
          [
            Validators.min(0.1),
            Validators.required
          ]
        ),
        caloriasgr:new FormControl(
          {
            value:this.productoActual?.caloriasgr,
            disabled:false
          },
          [
            Validators.min(0.1),
            Validators.required
          ]
        ),
        proveedor: new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.pattern("[a-zA-Z]+([\\s][a-zA-Z]*)*"),
            Validators.minLength(3),
            Validators.required
          ]
        ),
        stock:new FormControl(
          {
            value:this.productoActual?.stock,
            disabled:false
          },
          [
            Validators.min(0),
            Validators.required
          ]
        ),
        fechaElab:new FormControl(
          {
            value: formattedDate,
            disabled:false
          },
          [
            Validators.required
          ]
        ),
        fechaVenc:new FormControl(
          {
            value:fechaVencFormated,
            disabled:false
          },
          [
            Validators.required
          ]
        ),
        mercadoAsociado:new FormControl(
          {
            value:this.obtenerIndiceDeMercadoAsocActual(),
            disabled:false
          },
          [
            Validators.required
          ]
        )
      }
    );
    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe(
      {
        next:(valor)=>{
          if(this.formGroup){
            console.log(valor,this.formGroup);
            if(this.formGroup?.valid){
              console.log('YUPI');
            }else{
              console.log(':(');
            }
          }

        }
      }
    );
  }
  prepararObjeto(){
    if(this.formGroup){
      const nombreProducto = this.formGroup.get('nombreProducto');
      const precio = this.formGroup.get('precio');
      const categoria = this.formGroup.get('categoria');
      const pesogr = this.formGroup.get('pesogr');
      const caloriasgr = this.formGroup.get('caloriasgr');
      const proveedor = this.formGroup.get('proveedor');
      const stock = this.formGroup.get('stock');
      let disponibilidad =false;
      if(stock?.value>=0){
        disponibilidad=true;
      }
      const fechaElab = this.formGroup.get('fechaElab');
      const fechaVenc= this.formGroup.get('fechaVenc');
      console.log("CATE");
      console.log(this.arrayCategorias[this.formGroup.get('categoria')?.value]);
      const fkMercado= this.arrayMercados[this.formGroup.get('mercadoAsociado')?.value].idMercado;
      if(nombreProducto&&precio&&categoria&&pesogr&&caloriasgr&&proveedor&&stock&&fechaElab&&
        fechaVenc&&fkMercado){
        return {
          idProducto:this.productoActual?.idProducto,
          nombreProducto:nombreProducto.value,
          precio:precio.value,
          categoria:this.arrayCategorias[categoria.value],
          pesogr:pesogr.value,
          caloriasgr:caloriasgr.value,
          proveedor:0,
          stock:stock.value,
          disponibilidad:disponibilidad,
          fechaElab:fechaElab.value,
          fechaVenc:fechaVenc.value,
          fkMercado:fkMercado
        }
      }
    }
    return {
      idProducto:1,
      nombreProducto:'',
      precio:0,
      categoria:'',
      pesogr:0,
      caloriasgr:0,
      proveedor:0,
      stock:0,
      disponibilidad:false,
      fechaElab:'01-01-2019',
      fechaVenc:'01-01-2019',
      fkMercado:1
    }
  }
  actualizarProducto(){
    if(this.productoActual){
      const datosAActualizar = this.prepararObjeto();
      this.idProducto=this.productoActual.idProducto;
      const actualizar$ = this.productoService.actualizarPorId(datosAActualizar,this.idProducto);
      actualizar$.subscribe(
        {
          next:(datos)=>{
            console.log(datos);
            const url = ['/productos','producto'];
            this.router.navigate(url);
          }
        }
      )
    }
  }
  obtenerIndiceDeMercadoAsocActual():number{
    if(this.productoActual){
      let i = 1;
      if (this.productoActual?.fkMercado) {
        i = this.productoActual.fkMercado;
      }
      const mercEncontrado$ = this.mercadoService.buscarUno(i);
      mercEncontrado$.subscribe(
        {
          next: (dato) => {
            return this.arrayMercados.indexOf(dato);
          },
          error: (error) => {
            return 0;
          }
        }
      );
    }
    return 0;
  }
}
