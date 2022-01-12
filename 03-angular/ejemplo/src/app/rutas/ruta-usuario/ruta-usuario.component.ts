import { Component, OnInit } from '@angular/core';
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interfaces/user-jph.interface";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(private readonly userJphService:UserJphService) {

  }

  ngOnInit(): void {
    this.userJphService
      .buscarTodos()
      .subscribe({
          next: (datos) => {
            console.log({datos});
          },
          error: (error) => {
            console.error({error});
          },
        }
      )
  }
}
