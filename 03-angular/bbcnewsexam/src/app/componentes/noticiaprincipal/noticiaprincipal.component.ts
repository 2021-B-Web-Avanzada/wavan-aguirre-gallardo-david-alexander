import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticiaprincipal',
  templateUrl: './noticiaprincipal.component.html',
  styleUrls: ['./noticiaprincipal.component.scss']
})
export class NoticiaprincipalComponent implements OnInit {

  noticias=[
    {
      titulo:'Los 3 pilares de la expansión china en América Latina y el Caribe en dos años de pandemia',
      fecha:'30 de diciembre de 2021',
      urlImg:'/assets/mini1.jpg'
    },
    {
      titulo:'Coronavirus en México: cómo dos "detectives ciudadanos" revelaron el impacto real de la pandemia',
      fecha:'30 de diciembre de 2021',
      urlImg:'/assets/mini2.jpg'
    },
    {
      titulo:'Qué significa el juicio de Ghislaine Maxwell para el príncipe Andrés, acusado por una víctima de Jeffrey Epstein',
      fecha:'30 de diciembre de 2021',
      urlImg:'/assets/mini3.jpg'
    },
    {
      titulo:'Ghislaine Maxwell: los convincentes testimonios que llevaron a su condena por tráfico sexual',
      fecha:'30 de diciembre de 2021',
      urlImg:'/assets/mini4.jpg'
    },
    {
      titulo: 'Covid: cómo debes cuidarte en casa si das positivo',
      fecha: '26 de diciembre 2021',
      urlImg: '/assets/mini5.jpg'
    },
    {
      titulo: 'Billie Eilish: cómo la dieta afecta el cerebro y los hábitos alimenticios de los jóvenes como le pasó a la cantante',
      fecha: '9 horas',
      urlImg: '/assets/mini6.jpg'
    },
    {
      titulo: '5 metros de nieve en California y temperaturas de 20°C en Alaska: el "extraño" invierno de clima extremo que vive Norteamérica',
      fecha: '12 horas',
      urlImg: '/assets/mini7.jpg'
    },
    {
      titulo: 'Miguel Rojas, el adolescente venezolano que con 13 años descubrió un asteroide con apoyo de la NASA',
      fecha: '25 diciembre de 2021',
      urlImg: '/assets/mini8.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
