import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registromercado.component.html',
  styleUrls: ['./registromercado.component.scss']
})
export class RegistromercadoComponent implements OnInit {
  formGroup!:FormGroup;
  constructor(private readonly formBuilder:FormBuilder) { }

  ngOnInit(): void {
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

}
