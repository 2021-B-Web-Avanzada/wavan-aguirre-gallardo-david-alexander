import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SupermercadoInterface} from "../../../services/http/interfaces/supermercado.interface";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {ActualizarmercadoInterface} from "../../../services/http/interfaces/actualizarmercado.interface";

@Component({
  selector: 'app-actualizarmercado',
  templateUrl: './actualizarmercado.component.html',
  styleUrls: ['./actualizarmercado.component.scss']
})
export class ActualizarmercadoComponent implements OnInit {
  idMercado?:number;
  formGroup!:FormGroup;
  mercadoActual?:SupermercadoInterface;
  constructor(
    private readonly formBuilder:FormBuilder,
    private readonly activatedRoute:ActivatedRoute,
    private readonly mercadoService:SupermercadoService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    const parametrRuta$=this.activatedRoute.params;
    parametrRuta$.subscribe(
      (parametrosRuta)=>{
        this.idMercado= +parametrosRuta['idMercado'];
        this.buscarMercadoPorId(this.idMercado);
      }
    );
    this.prepararFormulario();
  }
  buscarMercadoPorId(idMercado:number){
    const buscarMercadoPorId$=this.mercadoService.buscarUno(idMercado);
    buscarMercadoPorId$.subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.mercadoActual=data;
          this.prepararFormulario();
        },
        error:(error)=>{
          console.error(error);
        }
      }
    )
  }
  actualizarMercado(){
    if(this.mercadoActual){
      const datosAActualizar = this.prepararObjeto();
      this.idMercado=this.mercadoActual.idMercado;
      const actualizar$ = this.mercadoService
        .actualizarPorId(datosAActualizar,this.idMercado);
      actualizar$.subscribe(
        {
          next:(datos)=>{
            console.log(datos);
            const url = ['/supermercado','mercado'];
            this.router.navigate(url);
          }
        }
      )
    }
  }
  prepararFormulario(){
    this.formGroup=this.formBuilder.group(
      {
        nombreMercado: new FormControl(
          {
            value:this.mercadoActual?.nombreMercado.trim(),
            disabled:false
          },
          [
            Validators.pattern("[a-zA-Z]+([\\s][a-zA-Z]*)*"),
            Validators.minLength(3),
            Validators.required
          ]
        ),
        propietario:new FormControl(
          {
            value:this.mercadoActual?.propietario.trim(),
            disabled:false
          },
          [
            Validators.pattern("[a-zA-Z]+([\\s][a-zA-Z]*)*"),
            Validators.minLength(3)
          ]
        ),
        cedulaProp:new FormControl(
          {
            value:this.mercadoActual?.cedulaProp.trim(),
            disabled:false
          },
          [
            Validators.pattern("[0-9]{10,10}"),
            Validators.required
          ]
        ),
        sucursales:new FormControl(
          {
            value:this.mercadoActual?.sucursales,
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
      const nombreMercado= this.formGroup.get('nombreMercado');
      const propietario = this.formGroup.get('propietario');
      const cedulaProp = this.formGroup.get('cedulaProp');
      const sucursales = this.formGroup.get('sucursales');
      if(nombreMercado&&propietario&&cedulaProp&&sucursales){
        return{
          idMercado:this.idMercado,
          nombreMercado:nombreMercado.value.trim(),
          sucursales:sucursales.value,
          propietario:propietario.value.trim(),
          cedulaProp:cedulaProp.value.trim(),
          deudaSRI:this.mercadoActual?.deudaSRI,
        }
      }
    }
    return {
      idMercado: 0,
      nombreMercado:'',
      sucursales:0,
      propietario:'',
      cedulaProp:'',
      deudaSRI: 0
    }
  }
}
