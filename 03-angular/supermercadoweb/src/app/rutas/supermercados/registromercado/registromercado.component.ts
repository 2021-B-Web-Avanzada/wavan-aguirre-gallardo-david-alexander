import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registromercado.component.html',
  styleUrls: ['./registromercado.component.scss']
})
export class RegistromercadoComponent implements OnInit {
  formGroup!:FormGroup;
  constructor(
    private readonly formBuilder:FormBuilder,
    private readonly mercadoService:SupermercadoService,
    private readonly router:Router) { }

  ngOnInit(): void {
    this.prepararFormulario();
  }
  prepararFormulario(){
    this.formGroup=this.formBuilder.group(
      {
        nombreMercado: new FormControl(
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
        propietario:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.pattern("[a-zA-Z]+([\\s][a-zA-Z]*)*"),
            Validators.minLength(3)
          ]
        ),
        cedulaProp:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.pattern("[0-9]{10,10}"),
            Validators.required
          ]
        ),
        sucursales:new FormControl(
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
      const nombreMercado= this.formGroup.get('nombreMercado');
      const propietario = this.formGroup.get('propietario');
      const cedulaProp = this.formGroup.get('cedulaProp');
      const sucursales = this.formGroup.get('sucursales');
      if(nombreMercado&&propietario&&cedulaProp&&sucursales){
        return{
          nombreMercado:nombreMercado.value,
          propietario:propietario.value,
          cedulaProp:cedulaProp.value,
          sucursales:sucursales.value
        }
      }
    }
    return {
      nombreMercado:'',
      propietario:'',
      cedulaProp:'',
      sucursales:0
    }
  }
  registrarMercado(){
    const valoresARegistrar = this.prepararObjeto();
    const registro$ = this.mercadoService.registrarMercado(valoresARegistrar);
    registro$.subscribe(
      {
       next:(datos)=>{
         console.log({datos});
         const url = ['/supermercado','mercado'];
         this.router.navigate(url);
       }
      }
    )
  }
}
