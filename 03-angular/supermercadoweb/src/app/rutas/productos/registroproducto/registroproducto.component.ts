import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../../services/http/producto/producto.service";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {Router} from "@angular/router";

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
  constructor(
    private readonly formBuilder:FormBuilder,
    private readonly productoService:ProductoService,
    private readonly mercadoService:SupermercadoService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.prepararFormulario();
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
  registrarProducto(){

  }
}
