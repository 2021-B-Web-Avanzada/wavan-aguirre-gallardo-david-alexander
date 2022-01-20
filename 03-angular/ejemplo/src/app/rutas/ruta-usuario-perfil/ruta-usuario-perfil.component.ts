import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interfaces/user-jph.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {
  idUsuario = 0;
  usuarioActual?:UserJphInterface;
  formGroup?:FormGroup;
  constructor(
    private readonly activatedRoute:ActivatedRoute,
    private readonly userJph:UserJphService,
    private readonly formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        email: new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.required,
            Validators.minLength(3),
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
    const parametrRuta$=this.activatedRoute.params;
    parametrRuta$.subscribe(
      (parametrosRuta)=>{
        console.log(parametrosRuta);
        this.idUsuario= +parametrosRuta['idUsuario'];
        this.buscarUsuarioPorId(this.idUsuario);
      }
    )
  }
  buscarUsuarioPorId(id:number){
    const buscarUsuarioPorId$ = this.userJph.buscarUno(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next:(data)=>{
            this.usuarioActual=data;
          },
          error: (error)=>{
            console.error(error);
          }
        }
      )
  }

}
