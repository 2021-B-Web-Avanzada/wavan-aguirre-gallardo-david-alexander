import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner = true;
  arregloUsuarios = [
    {
      id:1,
      nombre: 'David',
      color:"#00fb15",
      link:"https://www.disneyplus.com/es-ec?gclid=c48db51deaaf1dfe7b6ed4d9962bbbba&gclsrc=3p.ds&&cid=DSS-Search-Bing-71700000076598792&s_kwcid=AL!8468!10!79164977412455!disney&msclkid=c48db51deaaf1dfe7b6ed4d9962bbbba",
      linkImagen:"https://th.bing.com/th/id/R.83db4c0b95163532ad3f4900eb888f2c?rik=6UUCmq0H8wZ6Hg&riu=http%3a%2f%2fwww.gratistodo.com%2fwp-content%2fuploads%2f2016%2f02%2fDragon-Ball-Z-Wallpapers-HD-4.jpg&ehk=uG4UvSCIeyhdZ0ahDyVowQAwASgCCuwfj87tLmVH6Fw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id:2,
      nombre: 'Alexander',
      color:"#d75454",
      link:"https://www.netflix.com/ec/",
      linkImagen:"https://3.bp.blogspot.com/-u4dHgbNbk0Q/Vd8AuQuybKI/AAAAAAAAY9c/pNE14WKDpqQ/s1600/football-stadium-backgrounds-wallpaper-cave.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }
}
