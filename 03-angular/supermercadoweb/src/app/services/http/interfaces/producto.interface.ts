export interface ProductoInterface{
  idProducto:number;
  nombreProducto:string;
  precio:number;
  categoria:string;
  pesogr:number;
  caloriasgr:number;
  proveedor:number;
  stock:number;
  disponibilidad:boolean;
  fechaElab:string;
  fechaVenc:string;
  fkMercado:number;
}
