import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-separador-tipos',
  templateUrl: './separador-tipos.component.html',
  styleUrls: ['./separador-tipos.component.scss']
})
export class SeparadorTiposComponent implements OnInit {
  @Input()
  tituloSep = 'América Latina'
  constructor() { }

  ngOnInit(): void {
  }

}
