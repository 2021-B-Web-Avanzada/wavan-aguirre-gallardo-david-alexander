import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interfaces/user-jph.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalEjemploComponent} from "../../componentes/modales/modal-ejemplo/modal-ejemplo.component";
import {getInstrumentationExcludedPaths} from "@angular-devkit/build-angular/src/webpack/utils/helpers";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {
  idUsuario = 0;
  usuarioActual?:UserJphInterface;
  formGroup?:FormGroup;
  valueKnob = 30;
  items = [
    {
      label: 'Update', icon: 'pi pi-refresh', command: () => {
        console.log("Update hola");
      },
    },
    {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
  model = {
    left:true,
    middle:false,
    right: false
  };
  constructor(
    private readonly activatedRoute:ActivatedRoute,
    private readonly userJph:UserJphService,
    private readonly formBuilder:FormBuilder,
    private readonly router:Router,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {



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
            this.prepararFormulario();
          },
          error: (error)=>{
            console.error(error);
          }
        }
      )
  }
  prepararFormulario(){
    this.formGroup = this.formBuilder.group(
      {
        email: new FormControl(
          {
            value:this.usuarioActual ? this.usuarioActual.email:'',
            disabled:false
          },
          [
            Validators.required,
            Validators.minLength(3),
          ]
        ),
        esAdministrador: new FormControl(true)
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
      const email = this.formGroup.get('email');
      if(email){
        return {
          email:email.value,
        }
      }
    }
    return {
      email:'',
    }
  }
  actualizarUsuario(){
    if(this.usuarioActual){
      const valoresAActualizar=this.prepararObjeto();
      const actualizar$ = this.userJph
        .actualizarPorId(
          this.usuarioActual.id,
          valoresAActualizar
        );
      actualizar$
        .subscribe({
          next: (datos)=>{
            console.log({datos});
            const url = ['/app','usuario'];
            this.router.navigate(url);
          },
        });
    }

  }
  abrirDialogo(){
    const referenciaDialogo = this.dialog.open(
      ModalEjemploComponent,
      {
        disableClose:true,
        data:{
          animal:'panda',
        },
      }
    );
    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$
      .subscribe(
        (datos)=>{
          console.log(datos);
        }
      );
  }
  guardar(){
    console.log("Guardar")
  }
}
