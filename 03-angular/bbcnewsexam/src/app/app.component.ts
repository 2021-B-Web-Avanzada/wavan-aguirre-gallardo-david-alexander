import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bbcnewsexam';
  navItems = ["Noticias","América Latina","Internacional","Medioambiente","Cornovirus","Hay Festival","Economía","Ciencia","Salud","Cultura","Tecnología","Video"];
  tiposNotic = ["Internacional","Medioambiente","Economía","Ciencia","Salud","Cultura","Tecnología"];
  contentItems = ['Video y Audio','No te lo Pierdas'];
  videoaudioprincipal = {
    titulo:'Ómicron: las buenas y las malas noticias que dejan los primeros estudios de la variante',
    fecha:'12 de diciembre de 2021',
    urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/59C2/production/_122287922_gettyimages-1357650209.jpg.webp'
  };
  videoaudiosecundaria = {
    titulo:'Cómo tener sexo con los neandertales nos cambió para siempre | Especial BBC Mundo',
    fecha:'9 horas',
    urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/F386/production/_122524326_gettyimages-801805852.jpg.webp'
  };
  videoaudio=[
    {
      titulo:'La insólita fuga carcelaria de seis palestinos que conmocionó a Israel | Documental BBC',
      fecha:'2 horas',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/14D36/production/_122520358_nueva.png.webp'
    },
    {
      titulo:'Luca y Silvana: la historia de amor de una pareja con síndrome de Down | Documental',
      fecha:'12 de enero de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/10B1E/production/_96828386_trabajandotallercocina.jpg.webp'
    },
    {
      titulo:'Covid: ¿qué falló en el plan de vacunación mundial?',
      fecha:'29 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/6FED/production/_122235682_gettyimages-1223275316.jpg.webp'
    },
    {
      titulo:'Covid: cuáles son los síntomas de la variante ómicron conocidos hasta ahora',
      fecha:'29 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/15EFB/production/_117815898_jh2.jpg.webp'
    }
  ];
  notepierdasprincipal = {
    titulo:'Ómicron: 5 buenas noticias para acabar el año',
    fecha:'31 de diciembre de 2021',
    urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/E5C7/production/_122532885_gettyimages-1259161859.jpg.webp'
  };
  notepierdassecundaria = {
    titulo:'Covid de larga duración: "Tengo que elegir entre caminar y hablar"',
    fecha:'31 de diciembre de 2021',
    urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/D773/production/_122055155_em.jpg.webp'
  };
  notepierdas=[
    {
      titulo:'Los países de América Latina cuyas economías están mejor preparadas para enfrentar el 2022',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/0C7C/production/_122369130_gettyimages-1160765899.jpg.webp'
    },
    {
      titulo:'El peligroso reto que Alexa propuso a una niña de 10 años e hizo a Amazon cambiar su configuración',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/F386/production/_122524326_gettyimages-801805852.jpg.webp'
    },
    {
      titulo:'La increíble aventura de Demi Skipper, la mujer que a través de trueques en internet logró una vivienda propia',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/4FFC/production/_122367402_p0bcsyg6.jpg.webp'
    },
    {
      titulo:'La nueva parte del cuerpo hallada por un grupo de científicos (y para qué sirve)',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/1455B/production/_122519238_gettyimages-494856557.jpg.webp'
    },
    {
      titulo:'"Don\'t Look Up": ¿puede un meteorito de 10 km destruir la Tierra? (y otras preguntas científicas sobre la película de Netflix)',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/14D36/production/_122520358_nueva.png.webp'
    },
    {
      titulo:'El "último ciudadano soviético": Sergei Krikalev, el cosmonauta abandonado en el espacio mientras la Unión Soviética colapsaba',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/11452/production/_122483707_gettyimages-541371324.jpg.webp'
    },
    {
      titulo:'"Soy raro, soy deforme, lo voy a contar todo": el año fantástico del escritor y rapero Matías Fernández Burzaco',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/A406/production/_122509914_7b1c186f-1143-491d-a974-653fe9900b88.jpg.webp'
    },
    {
      titulo:'Cómo las vacunas ARNm que nos salvaron frente a la covid pueden derrotar a otras enfermedades y convertirnos en "superhumanos"',
      fecha:'31 de diciembre de 2021',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/5F2C/production/_122246342_a05391b8-a875-49d9-ad1e-fe11adecd838.jpg.webp'
    }
  ];
  noticiasTipo=[
    {
      titulo:'La controvertida humillación pública contra supuestos delincuentes aplicada en China',
      fecha:'31 de Diciembre de 2021',
      descripcion:'Los delincuentes han aprovechado para protestar en contra del regimen que los prime en China debido a que cada vez las represiones son mas fuertes.',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/D9B4/production/_122523755_mem2.jpg.webp'
    },
    {
      titulo:'La queja de China ante la ONU contra los satélites de Elon Musk por el riesgo de "colisión"',
      fecha:'31 de Diciembre de 2021',
      descripcion:'Los satelites contaminan demasiado, es lo que CHina reclama a Elon Musk por sus practicas navales.',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/7852/production/_122520803_gettyimages-1194820617.jpg.webp'
    },
    {
      titulo:'Por qué el azúcar de la fruta es bueno para la salud y el de los procesados no',
      fecha:'31 de Diciembre de 2021',
      descripcion:'El azucar causa diabetes, incluso la de las frutas, es por ello que se debe tener mucho cuidad al consumirlas.',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/8E59/production/_122514463_fr.jpg.webp'
    },
    {
      titulo:'Qué es la ZCAS, el fenómeno meteorológico detrás de las inundaciones de Brasil y qué lo hace ahora tan extremo',
      fecha:'31 de Diciembre de 2021',
      descripcion:'Las inundaciones y las pestes que trae son incuantificables, una de las amenazas mas duras es el ZCA.',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/237A/production/_122528090_gettyimages-1237430608.jpg.webp'
    },
    {
      titulo:'"Spider-Man: No Way Home", el veredicto de la BBC sobre la nueva cinta del Hombre Araña que arrasa en las taquillas',
      fecha:'31 de Diciembre de 2021',
      descripcion:'La nueva pelicula recientemente estrenada ha sido un exito rotuno en todas las partes del mundo, siendo cotizada en millones de dolares de ganancias.',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/1326/production/_122520940_93d8b1e9-0ae9-4b8f-8eec-ba0eaa359edb.jpg.webp'
    },
    {
      titulo:'Deer Park: qué busca México al comprar en Estados Unidos su primera refinería fuera del país',
      fecha:'31 de Diciembre de 2021',
      descripcion:'Las refinerias y la ausencia de personal que administre en Mexico es la principal causa de que se esten realizando este tipo de negocios.',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/13506/production/_122501197_gettyimages-53365258.jpg.webp'
    },
    {
      titulo:'Los secretos sobre la vida y muerte del fararón Amenhotep I que revela la primera tomografía de su momia',
      fecha:'31 de Diciembre de 2021',
      descripcion:'El faraon que ha sido desenterrado por arequelogos parece que fue uno de los mas ricos en sus tiempos.',
      urlImg:'https://ichef.bbci.co.uk/news/800/cpsprodpb/12E0/production/_122523840_mediaitem122523839.jpg.webp'
    }
  ];
}
