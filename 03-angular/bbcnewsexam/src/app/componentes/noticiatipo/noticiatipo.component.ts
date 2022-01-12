import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-noticiatipo',
  templateUrl: './noticiatipo.component.html',
  styleUrls: ['./noticiatipo.component.scss']
})
export class NoticiatipoComponent implements OnInit {
  @Input()
  tituloSeparador = 'América Latina';
  @Input()
  noticia={
    titulo:'Valentina Orellana: la tragedia de la chilena de 14 años que recibió un disparo accidental de un policía en una tienda de Los Ángeles',
    fecha:'31 de diciembre de 2021',
    descripcion:'Una niña estaba con su madre en un probador de ropa, al provocarse un tiroteo entre la policia y unos asaltantes; una bala perdida alcanzó a la menor. La misma que falleció por este hecho.',
    urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/9774/production/_122527783_valentina.jpg.webp'
  };
  masDeUnaNoticia=false;


  constructor() { }

  ngOnInit(): void {
  }

}
