import { Component, OnInit } from '@angular/core';
import {SupermercadoInterface} from "../../../services/http/interfaces/supermercado.interface";
import {SupermercadoService} from "../../../services/http/supermercado/supermercado.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss']
})
export class MercadoComponent implements OnInit {

  set arrayMarkets(value: SupermercadoInterface[]) {
    this._arrayMarkets = value;
  }
  get arrayMarkets(): SupermercadoInterface[] {
    return this._arrayMarkets;
  }
  public _arrayMarkets: SupermercadoInterface[]=[];
  buscarMercado = '';
  constructor(
    private readonly supermercadoServ:SupermercadoService,
    private readonly router:Router,
    private readonly activatedRoute:ActivatedRoute
  ) { }

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

}
