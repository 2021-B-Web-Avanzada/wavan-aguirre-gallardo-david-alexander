import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-noticia-enfoque',
  templateUrl: './noticia-enfoque.component.html',
  styleUrls: ['./noticia-enfoque.component.scss']
})
export class NoticiaEnfoqueComponent implements OnInit {
  @Input()
  tituloSeparador = 'Destacamos';
  @Input()
  noticiaPrincipal=
    {
      titulo:'Ghislaine Maxwell, condenada por abuso de drogas junto con Jeffrey Epstein',
      fecha:'9 horas',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/7CBF/production/_122053913_0001_3.jpg.webp'
    };
    @Input()
    noticiaMini = {
      titulo:'Quién es Ghislaine Maxwell, la exnovia del multimillonario Jeffrey Epstein condenada por abuso de drogas',
      fecha:'21 horas',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/36C2/production/_108281041_gettyimages-590696434.jpg.webp'
    };
  constructor() { }

  ngOnInit(): void {
  }

}
