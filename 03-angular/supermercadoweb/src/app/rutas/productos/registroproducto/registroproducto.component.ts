import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../../services/http/producto/producto.service";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {Router} from "@angular/router";
import {SupermercadoInterface} from "../../../services/http/interfaces/supermercado.interface";

@Component({
  selector: 'app-registroproducto',
  templateUrl: './registroproducto.component.html',
  styleUrls: ['./registroproducto.component.scss']
})
export class RegistroproductoComponent implements OnInit {
  formGroup!:FormGroup;
  arrayCategorias=[
    "Golosinas","Licores","Energizantes","Viveres","Perfumes",
    "Electrodomesticos","Aseo Personal","Carnes","Embutidos",
    "Postres","Frutas","Ropa"
  ]
  arrayMercados!:SupermercadoInterface[];
  constructor(
    private readonly formBuilder:FormBuilder,
    private readonly productoService:ProductoService,
    private readonly mercadoService:SupermercadoService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.prepararFormulario();
    this.mercadoService.buscarTodos('').subscribe(
      (datos)=>{
        console.log(datos);
        this.arrayMercados=datos;
      },
      ()=>{

      },
      ()=>{

      }
    )
  }
  prepararFormulario(){
    this.formGroup=this.formBuilder.group(
      {
        nombreProducto: new FormControl(
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
        precio:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.min(0.01),
            Validators.required
          ]
        ),
        categoria:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.required
          ]
        ),
        pesogr:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.min(0.1),
            Validators.required
          ]
        ),
        caloriasgr:new FormControl(
          {
            value:'',
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
            value:'',
            disabled:false
          },
          [
            Validators.min(0),
            Validators.required
          ]
        ),
        fechaElab:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.required
          ]
        ),
        fechaVenc:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.required
          ]
        ),
        mercadoAsociado:new FormControl(
          {
            value:'',
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
      console.log(this.formGroup.get('mercadoAsociado')?.value);
      const fkMercado= this.arrayMercados[this.formGroup.get('mercadoAsociado')?.value].idMercado;
      if(nombreProducto&&precio&&categoria&&pesogr&&caloriasgr&&proveedor&&stock&&fechaElab&&
      fechaVenc&&fkMercado){
        return {
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
  registrarProducto(){
    const valoresARegistrar = this.prepararObjeto();
    const registro$ = this.productoService.registrarProducto(valoresARegistrar);
    registro$.subscribe(
      {
        next:(data)=>{
          console.log({data});
          const url = ['/productos','producto'];
          this.router.navigate(url);
        }
      }
    )
  }
}
