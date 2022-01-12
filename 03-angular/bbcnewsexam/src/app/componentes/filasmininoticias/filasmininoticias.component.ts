import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filasmininoticias',
  templateUrl: './filasmininoticias.component.html',
  styleUrls: ['./filasmininoticias.component.scss']
})
export class FilasmininoticiasComponent implements OnInit {
  @Input()
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
