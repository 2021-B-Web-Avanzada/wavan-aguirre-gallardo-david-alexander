const nombreProducto=String;
const precioVentaPublico=Number;
const descripcion = {
    categoria:"",
    pesoKg:0,
    calorias:0,
    proveedor:""
}
const stock=Number;
const disponible = boolean;
const fechaElaboracion=Date;
const fechaVencimiento= Date;

function imprimirProducto(){
    console.log("----------PRODUCTO-------------");
    console.log("Nombre:",nombreProducto);
    console.log("P.V.P:",precioVentaPublico);
    console.log("descripcion:",descripcion);
    console.log("Stock:",stock);
    console.log("disponibilidad",disponible);
    console.log("Fecha Elab.:",fechaElaboracion);
    console.log("Fecha Vence:",fechaVencimiento);

}