import { Component, OnInit } from '@angular/core';
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interfaces/user-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  arreglo : UserJphInterface[]=[];
  buscarUsuario='';

  constructor(
    private readonly userJphService:UserJphService,
    private readonly router:Router,
    private readonly activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
      .queryParams;
      parametrosConsulta$.subscribe(
        (queryParams)=>{
          console.log(queryParams);
          this.buscarUsuario=queryParams['name'];
          this.buscarUsuarios();
        },
        ()=>{},
        ()=>{}
      );

  }
  actualizarParametrosDeConsulta(){
    this.router.navigate(['/app', 'usuario'],
      {
        queryParams: {
          name: this.buscarUsuario//?name=david
        }
      }
    );
  }
  gestionarUsuario(idUsuario:number){
    const ruta = ['/app','usuario',idUsuario];//app/usuario/1
    this.router.navigate(ruta);
  }
  buscarUsuarios(){
    this.userJphService
      .buscarTodos({
        name:this.buscarUsuario
      })
      .subscribe({
          next: (datos) => {
            this.arreglo=datos;
            this.buscarUsuario='';
          },
          error: (error) => {
            console.error({error});
          },
        }
      )
  }
}
