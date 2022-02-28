import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {websocketsService} from "../../services/websockets/websockets.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-ruta-juego',
  templateUrl: './ruta-juego.component.html',
  styleUrls: ['./ruta-juego.component.scss']
})
export class RutaJuegoComponent implements OnInit {
  formGroup!:FormGroup;
  salaId='';
  nombre='';
  mensaje='';
  player1="";
  player2="";
  idSala="";
  jugada="";
  datosJugadaRetador:any;
  llegoJugadaRetador=false;
  dioClick=false;
  player1bool=false;
  constructor(
    private readonly activatedRoute:ActivatedRoute,
    private readonly webSocketService:websocketsService,
    private readonly formBuilder:FormBuilder,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(
        {
          next:(parametrosDeRuta)=>{
            const salaId='0';
            const nombre=parametrosDeRuta['player1'];
            this.player1=nombre;
            this.player2=parametrosDeRuta['player2'];
            if(environment.esPlayer1){
              this.llenarFormularioPlayer1(this.player1,this.player2);
            }else{
              this.llenarFormulario(this.player1,this.player2);
            }
            this.logicaSalas(this.salaId,this.player1);
            console.log("parametros ruta = ",parametrosDeRuta);
          }
        }
      );

  }
  llenarFormulario(nombrePlayer1:String,nombreRetador:String){
    this.formGroup=this.formBuilder.group(
      {
        username:new FormControl(
          {
            value:nombrePlayer1,
            disabled:true
          },
          []
        ),
        usernameplayer2:new FormControl(
          {
            value:nombreRetador,
            disabled:true
          },
          []
        ),
        jugada:new FormControl(
          {
            value:'',
            disabled:true
          },
          []
        ),
        jugadaplayer2:new FormControl(
          {
            value:'',
            disabled:false
          },
          []
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
  llenarFormularioPlayer1(nombrePlayer1:String,nombreRetador:String){
    console.log("llenar form player 1 activado");
    this.formGroup=this.formBuilder.group(
      {
        username:new FormControl(
          {
            value:nombrePlayer1,
            disabled:true
          },
          []
        ),
        usernameplayer2:new FormControl(
          {
            value:nombreRetador,
            disabled:true
          },
          []
        ),
        jugada:new FormControl(
          {
            value:'',
            disabled:false
          },
          []
        ),
        jugadaplayer2:new FormControl(
          {
            value:'',
            disabled:true
          },
          []
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
  llenarFormularioJugada2(jugadaplayer1:string){
    console.log("llenar form player 2 jugada activado",jugadaplayer1);
    let valuejugplayer1='0';
    if(jugadaplayer1==="Tijera"){
      valuejugplayer1='3';
    }
    if(jugadaplayer1==="Piedra"){
      valuejugplayer1='1';
    }
    if(jugadaplayer1==="Papel"){
      valuejugplayer1='2';
    }
    this.formGroup=this.formBuilder.group(
      {
        username:new FormControl(
          {
            value:this.player1,
            disabled:true
          },
          []
        ),
        usernameplayer2:new FormControl(
          {
            value:this.player2,
            disabled:true
          },
          []
        ),
        jugada:new FormControl(
          {
            value:valuejugplayer1,
            disabled:true
          },
          []
        ),
        jugadaplayer2:new FormControl(
          {
            value:this.obtenerValorDeJugada(this.jugada),
            disabled:true
          },
          []
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
  llenarFormularioJugada1(jugadaplayer2:string){
    console.log("llenar form player 1 jugada ", jugadaplayer2);
    let valuejugplayer2='0';
    if(jugadaplayer2==="Tijera"){
      valuejugplayer2='3';
    }
    if(jugadaplayer2==="Piedra"){
      valuejugplayer2='1';
    }
    if(jugadaplayer2==="Papel"){
      valuejugplayer2='2';
    }
    this.formGroup=this.formBuilder.group(
      {
        username:new FormControl(
          {
            value:this.player1,
            disabled:true
          },
          []
        ),
        usernameplayer2:new FormControl(
          {
            value:this.player2,
            disabled:true
          },
          []
        ),
        jugada:new FormControl(
          {
            value:this.obtenerValorDeJugada(this.jugada),
            disabled:true
          },
          []
        ),
        jugadaplayer2:new FormControl(
          {
            value:valuejugplayer2,
            disabled:true
          },
          []
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
  logicaSalas(salaId:string,nombre:string) {
    const respuestaEscucharEventoRealizarJugada=this.webSocketService.escucharEventoRealizarJugada()
      .subscribe(
        {
          next:(data:any)=>{
            console.log("evento mensaje jugada =",data);
            this.llegoJugadaRetador=true;
            this.datosJugadaRetador=data;
            if(this.dioClick){
              if(environment.esPlayer1){
                this.llenarFormularioJugada1(data.jugada);
                this.verificarGanador(this.obtenerValorDeJugada(this.jugada),this.obtenerValorDeJugada(data.jugada));
              }else{
                this.llenarFormularioJugada2(data.jugada);
                this.verificarGanador(this.obtenerValorDeJugada(data.jugada),this.obtenerValorDeJugada(this.jugada));
              }
            }
          },
          error:(error)=>{

          }
        }
      )
    const respuestaEscucharEventoUnirseSala= this.webSocketService.escucharEventoUnirseSala()
      .subscribe(
        {
          next:(data:any)=>{
            console.log("Alguien entro ",data);
            this.salaId=data.idSala;
            this.player1=data.player1;
            this.player2=data.player2;
            this.jugarBoton();
            environment.idSala=this.salaId;
            console.log("sala id = ", environment.idSala);
            const ruta=['juego',this.player1,this.player2];
            environment.esPlayer1=true;
            this.router.navigate(ruta);
          },
          error:(error)=>{
            console.error({error});
          },
          complete:()=>{

          }
        }
      );
  }
  jugarBoton(){
    this.webSocketService.ejecutarEventoPresentarJugadores(this.salaId,this.nombre,"player2");
  }
  prepararJugada(){
    if(this.formGroup){
      if(environment.esPlayer1){
        this.player1=this.formGroup.get('username')?.value;
        this.jugada=this.formGroup.get('jugada')?.value
      }else{
        this.player2=this.formGroup.get('usernameplayer2')?.value
        this.jugada=this.formGroup.get('jugadaplayer2')?.value
      }
      if(this.jugada==='1'){
        this.jugada="Piedra"
      }
      if(this.jugada==='2'){
        this.jugada="Papel"
      }
      if(this.jugada==='3'){
        this.jugada="Tijera"
      }
    }
  }
  lanzarJugada(){
    this.prepararJugada();
    this.dioClick=true;
    let mensaje={
      idSala:environment.idSala.toString(),
      jugador:'',
      jugada:this.jugada
    } as any;
    if(environment.esPlayer1){
      mensaje.jugador=this.player1;
      console.log("entrando",mensaje);
      this.webSocketService.ejecutarEventoRealizarJugada(mensaje);
    }else{
      mensaje.jugador=this.player2;
      console.log("entrando player2",mensaje);
      this.webSocketService.ejecutarEventoRealizarJugada(mensaje);
    }
    console.log("llego jug retador",this.llegoJugadaRetador);
    if(this.llegoJugadaRetador){
      if(environment.esPlayer1){
        this.llenarFormularioJugada1(this.datosJugadaRetador.jugada);
        this.verificarGanador(this.obtenerValorDeJugada(this.jugada),this.obtenerValorDeJugada(this.datosJugadaRetador.jugada));
      }else{
        this.llenarFormularioJugada2(this.datosJugadaRetador.jugada);
        this.verificarGanador(this.obtenerValorDeJugada(this.datosJugadaRetador.jugada),this.obtenerValorDeJugada(this.jugada));
      }
    }
  }
  obtenerValorDeJugada(jugada:string):string{
    if(jugada==="Piedra"){
      return '1';
    }
    if(jugada==="Papel"){
      return '2';
    }
    if(jugada==="Tijera"){
      return '3';
    }
    return'1';
  }
  verificarGanador(jugadaplayer1:string,jugadaplayer2:string){
    if(jugadaplayer1===jugadaplayer2){
      console.log("Empate");
    }
    if(jugadaplayer1==="1"&&jugadaplayer2==="2"){
      console.log("Ganador jugador 2");
    }
    if(jugadaplayer1==="1"&&jugadaplayer2==="3"){
      console.log("Ganador jugador 1");
    }
    if(jugadaplayer1==="2"&&jugadaplayer2==="1"){
      console.log("Ganador jugador 2");
    }
    if(jugadaplayer1==="2"&&jugadaplayer2==="3"){
      console.log("Ganador jugador 3");
    }
    if(jugadaplayer1==="3"&&jugadaplayer2==="1"){
      console.log("Ganador jugador 1");
    }
    if(jugadaplayer1==="3"&&jugadaplayer2==="2"){
      console.log("Ganador jugador 3");
    }
    if(jugadaplayer1==="1"&&jugadaplayer2==="2"){
      console.log("Ganador jugador 2");
    }
    if(jugadaplayer1==="2"&&jugadaplayer2==="1"){
      console.log("Ganador jugador 2");
    }
    if(jugadaplayer1==="3"&&jugadaplayer2==="1"){
      console.log("Ganador jugador 1");
    }
    if(jugadaplayer1==="1"&&jugadaplayer2==="2"){
      console.log("Ganador jugador 2");
    }
    if(jugadaplayer1==="3"&&jugadaplayer2==="2"){
      console.log("Ganador jugador 3");
    }
    if(jugadaplayer1==="1"&&jugadaplayer2==="3"){
      console.log("Ganador jugador 1");
    }
    if(jugadaplayer1==="2"&&jugadaplayer2==="3"){
      console.log("Ganador jugador 3");
    }
  }
}
