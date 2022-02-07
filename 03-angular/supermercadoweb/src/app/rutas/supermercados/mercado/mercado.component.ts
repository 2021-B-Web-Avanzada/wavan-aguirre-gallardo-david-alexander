import {Component, Injectable, Injector, OnInit} from '@angular/core';
import {SupermercadoInterface} from "../../../services/http/interfaces/supermercado.interface";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModalBorrarmercadoComponent} from "../../../componentes/modales/modal-borrarmercado/modal-borrarmercado.component";


@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss']
})
@Injectable()
export class MercadoComponent implements OnInit {

  set arrayMarkets(value: SupermercadoInterface[]) {
    this._arrayMarkets = value;
  }
  get arrayMarkets(): SupermercadoInterface[] {
    return this._arrayMarkets;
  }
  public _arrayMarkets: SupermercadoInterface[]=[];
  buscarMercado = '';
  private _injector:Injector;
  constructor(
    private readonly supermercadoServ:SupermercadoService,
    private readonly router:Router,
    private readonly activatedRoute:ActivatedRoute,
    public dialogo:MatDialog,
    injector:Injector
  ) {
    this._injector=injector;
  }

  ngOnInit(): void {

    const parametrosConsulta$= this.activatedRoute
      .queryParams;
    parametrosConsulta$.subscribe(
      (queryParams)=>{
        console.log(queryParams);
        this.buscarMercado=queryParams['name'];
        this.buscarMercados();
      },
      (error)=>{},
      ()=>{}
    );
  }

  actualizarParametrosDeConsulta(){
    this.router.navigate(
      ['/supermercado','mercado'],
      {
        queryParams:{
          name:this.buscarMercado//?name=mercadoname
        }
      }
    );
  }
  buscarMercados(){
    this.supermercadoServ.buscarTodos({
      name:this.buscarMercado
    })
      .subscribe(
        (data)=>{
          console.log(data);
          this._arrayMarkets=data;
          this.buscarMercado='';
        },
        (error)=>{
          console.log({error});
        }
      );
  }
  eliminarMercado(id?:number){
    this.supermercadoServ.eliminarMercado(id)
      .subscribe(
        (data)=>{
          console.log(data);
          // const urlRecarga = ['/supermercado','mercado'];
          // this.router.navigate(urlRecarga);
          this.buscarMercados();
        },
        (error)=>{
          console.log({error});
        }
      );
  }
  abrirDialogoConfirmacionEliminar(mercado:SupermercadoInterface){
    if(!this.dialogo){
      this.dialogo=this._injector.get(MatDialog);
    }
    const referenciaDialogo = this.dialogo.open(
      ModalBorrarmercadoComponent,
      {
        data:{
          idMercado:mercado.idMercado,
          nombreMercado:mercado.nombreMercado,
          propietario:mercado.propietario,
          cedulaProp:mercado.cedulaProp,
          sucursales:mercado.sucursales
        }
      }
    );
    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$
      .subscribe(
        (datos)=>{
          if(datos){
            this.eliminarMercado(mercado.idMercado);
          }
        }
      );
  }
  actualizarMercado(idMercado:number|undefined){
    const ruta = ['/supermercado','actualizarmercado',idMercado];
    this.router.navigate(ruta);
  }
}
