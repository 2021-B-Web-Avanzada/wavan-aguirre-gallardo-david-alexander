import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prefooter',
  templateUrl: './prefooter.component.html',
  styleUrls: ['./prefooter.component.scss']
})
export class PrefooterComponent implements OnInit {
  @Input()
  tituloSeparador1='En redes sociales';
  @Input()
  tituloSeparador2='Más leídas';

  masleidasNoticias = [
    {
      numero:1,
      titulo:'El hombre que encontró a su madre 3 décadas después de ser secuestrado gracias a un dibujo de sus recuerdos infantiles'
    },
    {
      numero:2,
      titulo:'Covid: cuáles son los síntomas hasta ahora conocidos de la variante ómicron'
    },
    {
      numero:3,
      titulo:'¿Cuál es la mejor manera de tomar decisiones?'
    },
    {
      numero:4,
      titulo:'Los experimentos de dos gemelos idénticos para comprobar si una dieta vegana es más sana que comer carne y lácteos'
    },
    {
      numero:5,
      titulo:'"Nosotros no tenemos culpa de nada, no nos pueden juzgar por un apellido": los herederos de Batista, el gobernante de Cuba derrocado por Fidel Castro'
    }
  ];
  masLeidasNoticiasDer = [
    {
      numero:6,
      titulo:'La increíble historia del hombre que se ofreció voluntario para ser encarcelado en Auschwitz para derrotar a los nazis'
    },
    {
      numero:7,
      titulo:'"Viviendo aparte juntos": las parejas que deciden vivir separadas'
    },
    {
      numero:8,
      titulo:'Ómicron: 5 buenas noticias para acabar el año'
    },
    {
      numero:9,
      titulo:'Año Nuevo: así recibió el mundo el 2022, en medio del repunte de contagios por ómicron'
    },
    {
      numero:10,
      titulo:'Billie Eilish: cómo las drogas afectan el cerebro y los hábitos de los jóvenes como le pasó a la cantante'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
