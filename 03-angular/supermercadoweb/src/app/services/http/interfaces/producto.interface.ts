export interface ProductoInterface{
  id:number;
  nombre:string;
  precio:number;
  categoria:string;
  pesoGr:number;
  caloriasGr:number;
  proveedor:number;
  stock:number;
  disponibilidad:boolean;
  fechaElab:string;
  fechaVence:string;
  fkMercado:number;
}
