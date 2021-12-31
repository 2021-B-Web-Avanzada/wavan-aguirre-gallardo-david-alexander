import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticiaprincipal',
  templateUrl: './noticiaprincipal.component.html',
  styleUrls: ['./noticiaprincipal.component.scss']
})
export class NoticiaprincipalComponent implements OnInit {
  urlsImgsMiniNoticias=['/assets/mini1.jpg','/assets/mini2.jpg','/assets/mini3.jpg','/assets/mini4.jpg',
    '/assets/mini5.jpg','/assets/mini6.jpg','/assets/mini7.jpg','/assets/mini8.jpg'];
  titulosMiniNoticias=[
    'Los 3 pilares de la expansión china en América Latina y el Caribe en dos años de pandemia',
    'Coronavirus en México: cómo dos "detectives ciudadanos" revelaron el impacto real de la pandemia',
    'Qué significa el juicio de Ghislaine Maxwell para el príncipe Andrés, acusado por una víctima de Jeffrey Epstein',
    'Ghislaine Maxwell: los convincentes testimonios que llevaron a su condena por tráfico sexual',
    'Covid: cómo debes cuidarte en casa si das positivo',
    'Billie Eilish: cómo la dieta afecta el cerebro y los hábitos alimenticios de los jóvenes como le pasó a la cantante',
    '5 metros de nieve en California y temperaturas de 20°C en Alaska: el "extraño" invierno de clima extremo que vive Norteamérica',
    'Miguel Rojas, el adolescente venezolano que con 13 años descubrió un asteroide con apoyo de la NASA'
  ];
  horasMiniNoticias = [
    '30 de diciembre de 2021',
    '29 de diciembre de 2021',
    '28 de diciembre de 2021',
    '9 horas',
    '30 de diciembre de 2021',
    '29 de diciembre de  2021',
    '30 de diciembre de 2021',
    '30 de diciembre de 2021'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
