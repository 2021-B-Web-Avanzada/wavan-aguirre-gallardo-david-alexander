import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {websocketsService} from "../../services/websockets/websockets.service";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-ruta-homejuego',
  templateUrl: './ruta-homejuego.component.html',
  styleUrls: ['./ruta-homejuego.component.scss']
})
export class RutaHomejuegoComponent implements OnInit {

  arregloSalasEnEspera:number[]=[];
  nombre="";
  dificultad="";
  player1="";
  player2="";
  formGroup!:FormGroup;
  constructor(
    private readonly router:Router,
    readonly webSocketServ:websocketsService,
    private  readonly  formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.webSocketServ.escucharEventoHola()
      .subscribe(
        {
          next:(data)=>{
            console.log(data);
          },
          error:(error)=>{
            console.log(error);
          }
        }
      );
    this.prepararFormulario();
  }
  prepararFormulario(){
    this.formGroup=this.formBuilder.group(
      {
        username:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
            Validators.required,
            Validators.pattern("[A-Za-z0-9]+")
          ]
        ),
        dificultad:new FormControl(
          {
            value:'',
            disabled:false
          },
          [
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
      this.player1=this.formGroup.get('username')?.value;
      this.dificultad=this.formGroup.get('dificultad')?.value
      if(this.dificultad==='1'){
        this.dificultad="Facil"
      }
      if(this.dificultad==='2'){
        this.dificultad="Media"
      }
      if(this.dificultad==='3'){
        this.dificultad="Dificil"
      }
    }
  }
  jugar(){
    this.prepararObjeto()
    this.webSocketServ.ejecutarEventoUnirseSala(6,this.player1,"player2");
    const respuestaEscucharEventoPresentarJugadores$=this.webSocketServ.escucharEventoPresentarJugadores()
      .subscribe(
        {
          next:(data:any)=>{
            console.log("escucharevento presentar jugadores:",data);
            environment.idSala=data.idSala.toString();
            environment.esPlayer1=false;
            console.log(environment.idSala);
            this.player1=data.player1;
            this.player2=data.player2;
            environment.esPlayer2=true;
            const ruta = ['/juego',this.player1,this.player2];
            this.router.navigate(ruta);
          },
          error:(error:any)=>{
            console.log(error);
          }
        }
      );
    const ruta = ['/juego'];
    this.router.navigate(ruta);
  }

}
