import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-enfoquemultimini',
  templateUrl: './enfoquemultimini.component.html',
  styleUrls: ['./enfoquemultimini.component.scss']
})
export class EnfoquemultiminiComponent implements OnInit {
  @Input()
  noticias = [
    {
      titulo:'Ortorexia, la obsesión por comer sano que puede dañar tu salud',
      fecha:'23 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/12A3F/production/_122515367_comidasanaok.jpg.webp'
    },
    {
      titulo:'Protestas en Cuba: las duras condenas en la isla contra los manifestantes del 11 de julio',
      fecha:'23 de enero de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/1132/production/_122520440_cuba-11j-eeuu-juicios.jpg.webp'
    },
    {
      titulo:'Pez Tequila: el curioso caso del pez "extinto" que volvió a la vida en los ríos de México',
      fecha:'23 de enero de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/204A/production/_122366280_landscapeoflakeinjalisco.png.webp'
    },
    {
      titulo:'Covid: la alerta de la OMS por la "amenaza gemela" de ómicron y delta y el "tsunami" de contagios que causa',
      fecha:'23 de enero de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/12F69/production/_122537677_gettyimages-1361791021.jpg.webp'
    }
  ];
  @Input()
  tituloSeccion = 'Más Noticias';
  @Input()
  noticiaPrincipal={
    titulo:'Miguel Rojas, el adolescente venezolano que con 13 años descubrió un asteroide con apoyo de la NASA',
    fecha:'23 de enero de 2021',
    urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/541B/production/_122513512_miguelrojas.jpg.webp'
  };
  @Input()
  noticiaSecundaria={
    titulo:'El error de cálculo que llevó a que México perdiera el territorio de Texas',
    fecha:'29 de enero de 2021',
    urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/87D5/production/_122537743_texas2.jpg.webp'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
