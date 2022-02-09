import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketService} from "../../services/websockets/websocket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit,OnDestroy {
  salaId='';
  nombre='';
  arregloSuscripciones:Subscription[]=[];
  mensaje='';
  arregloMensajes: {
    salaId:string;
    nombre:string;
    mensaje:string;
    posicion:'izq'|'der';
  }[]=[]
  constructor(
    public  readonly activatedRoute:ActivatedRoute,
    public readonly webSocketService:WebsocketService
  ) {
    console.log("Constructor")
  }

  ngOnInit(): void {
    console.log('Init');
    this.activatedRoute
      .params
      .subscribe(
        {
          next:(parametrosDeRuta)=>{
            const salaId=parametrosDeRuta['salaId'];
            const nombre=parametrosDeRuta['nombre'];
            this.salaId=salaId;
            this.nombre=nombre;
            this.logicaSalas(this.salaId,this.nombre);
            console.log(parametrosDeRuta);
          }
        }
      );
  }
  logicaSalas(salaId:string,nombre:string){
    this.desuscribirse();
    const respuestaEscucharEventoMensajeSala=this.webSocketService.escucharEventoMensajeSala()
      .subscribe(
        {
          next:(data)=>{
            console.log("Enviaron mensaje ",data);
            this.arregloMensajes.push({
              // salaId:data.salaId,
              // nombre:data.nombre,
              // mensaje:data.mensaje,
              // posicion:data.nombre===this.nombre?'izq':'der'
            });
          },
          error:(error)=>{
            console.error({error});
          }
        }
      );
    const respuestaEscucharEventoUnirseSala=this.webSocketService.escucharEventoUnirseSala()
      .subscribe(
        {
          next:(data)=>{
            console.log("Alguien entro ",data);
          },
          error:(error)=>{
            console.error({error});
          }
        }
      );
    this.arregloSuscripciones.push(respuestaEscucharEventoUnirseSala);
    this.arregloSuscripciones.push(respuestaEscucharEventoMensajeSala);
    this.webSocketService.ejecutarEventoUnirseSala(+this.salaId,this.nombre);
  }
  desuscribirse(){
    this.arregloSuscripciones.forEach(
      (suscripcion)=>{
        suscripcion.unsubscribe();
      }
    );
    this.arregloSuscripciones=[];
  }
  enviarMensaje(){
    this.webSocketService.ejecutarEventoEnviarMensaje(
      +this.salaId,
      this.nombre,
      this.mensaje
    );
    this.mensaje='';
  }
ngOnDestroy() {
    console.log('Destroy');
}
}
