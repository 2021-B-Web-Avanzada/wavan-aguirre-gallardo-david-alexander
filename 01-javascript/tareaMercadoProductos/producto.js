const inquirer = require('inquirer');
const fs = require('fs');
const Console = require("console");
const mercado= require('./supermercado.js');

let nombreProducto=String;
let precioVentaPublico=Number;
let descripcion = {
    categoria:"",
    pesoKg:0,
    calorias:0,
    proveedor:""
}
let stock=Number;
let disponible = false;
let fechaElaboracion=Date;
let fechaVencimiento= Date;
let mercados = [];
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
function validarFecha(fechaCadena){
    let arregloFecha = fechaCadena.split('-');
    if(arregloFecha.length!=3){
        return false;
    }
    try {
        let dia = parseInt(arregloFecha[0]);
        let mes = parseInt(arregloFecha[1]);
        let anio = parseInt(arregloFecha[2]);
        if( dia>31){
            return false;
        }
        if(mes>12){
            return false
        }
    }catch (e) {
        console.log(e);
        return false;
    }
    return true;
}
async function registrarProducto(){
    try{
        const respuestaRegisro = await inquirer.prompt([
            {
                type:'input',
                name:'nombreProducto',
                message:'Ingresa el nombre del producto:'
            },
            {
                type:'input',
                name:'precioProducto',
                message:'Ingresa el precio del producto:'
            },
            {
                type:'input',
                name:'categoria',
                message:'Ingresa la categoria del producto:'
            },
            {
                type:'input',
                name:'pesoProducto',
                message:'Ingresa el peso del producto:'
            },
            {
                type:'input',
                name:'caloriasProducto',
                message:'Ingresa gramos de calorias del producto:'
            },
            {
                type:'input',
                name:'proveedorProducto',
                message:'Ingresa el proveedor del producto:'
            },
            {
                type:'input',
                name:'stockProducto',
                message:'Ingresa la cantidad de stock del producto:'
            }
        ]);
        //Asignacion variables
        nombreProducto = respuestaRegisro.nombreProducto;
        precioVentaPublico = parseFloat(respuestaRegisro.precioProducto);
        descripcion.categoria = respuestaRegisro.categoria;
        descripcion.pesoKg = respuestaRegisro.pesoProducto;
        descripcion.calorias = respuestaRegisro.caloriasProducto;
        descripcion.proveedor= respuestaRegisro.proveedorProducto;
        stock = parseInt(respuestaRegisro.stockProducto);
        if(stock>0){
            disponible=true;
        }else{
            stock=0;
            disponible=false;
        }
        while(true){
            const respuestaFechaElab = await inquirer.prompt([
                {
                    type:'input',
                    name:'fechaElabProducto',
                    message:'Ingresa la fecha de elaboracion del producto:(dd-mm-anio)'
                }
            ]);
            if(validarFecha(respuestaFechaElab.fechaElabProducto)){
                let arregloFecha = respuestaFechaElab.fechaElabProducto.split('-');
                fechaElaboracion=new Date(arregloFecha[2],arregloFecha[1]-1,arregloFecha[0]);
                break;
            }else{
                console.log("Formato fecha no valido.");
            }
        }
        while (true){
            const respuestaFechaVence = await inquirer.prompt([
                {
                    type:'input',
                    name:'fechaVencProducto',
                    message:'Ingresa la fecha de vencimiento del producto:'
                }
            ]);
            if(validarFecha(respuestaFechaVence.fechaVencProducto)){
                let fechaArreglo = respuestaFechaVence.fechaVencProducto.split('-');
                fechaVencimiento = new Date(fechaArreglo[2],fechaArreglo[1]-1,fechaArreglo[0]);
                break;
            }
        }
        let listaMercados = await mercado.getSupermercados();
        let listaMercadosProducto = [];
        while (true){
            console.log("-----Mercados Disponibles------");
            for(let i=0;i<listaMercados.length-1;i++){
                console.log(i,' ',listaMercados[i]);
            }
            const respuestaMercados = await inquirer.prompt([
                {
                    type:'input',
                    name:'mercados',
                    message:'Seleccione los mercados que ofrecen el producto:(Inserte f para finalizar)'
                }
            ]);
            if(respuestaMercados.mercados=='f'){
                mercados = listaMercadosProducto;
                break;
            }
            let indice = parseInt(respuestaMercados.mercados);
            console.log('indice',indice);
            if(indice<listaMercados.length-1){
                let mercado = listaMercados.splice(indice,1);
                listaMercadosProducto.push(mercado[0].split('|')[1]);
            }
            console.log("Mercados que Ofrecen Producto:",listaMercadosProducto);
            if(listaMercados.length-1==0){
                Console.log("Todos los mercados disponibles ya han sido añadidos.");
                mercados = listaMercadosProducto;
                break;
            }
        }
        let filaAInsertar = nombreProducto+'|'+precioVentaPublico+'|'+descripcion.categoria+'|'+descripcion.pesoKg+'|'
        +descripcion.calorias+'|'+descripcion.proveedor+'|'+stock+'|'+disponible+'|'+fechaElaboracion+'|'+fechaVencimiento+'|'
            +mercados+'\n';
        await appendFileProd(filaAInsertar);
    }catch (e){
        console.log(e);
    }
}
function getListaProductos(){
    const promesaListaProds = new Promise(
        (resolve,reject)=>{
            fs.readFile('./producto.txt', 'utf8', function(err, data){
                if(err){
                    console.log("¡¡¡¡¡¡Error de lectura de archivo!!!!!!!!")
                    reject(false);
                }else{
                    let filas = data.split('\n');
                    resolve(filas);
                }
            });
        }
    );
    return promesaListaProds;
}
async function listarProductos(){
    let listaProductos = await getListaProductos();
    console.log("------------Productos---------------");
    console.log("indice|nombre|precio|categoria|peso(gr)|calorias|Proveedor|stock|disponible|fecha elaboracion|fecha venicimiento|Mercados");
    for(let indProducto in listaProductos){
        if(indProducto< listaProductos.length-1){
            console.log(indProducto,' ', listaProductos[indProducto]);
        }
    }
}
async function eliminarProducto(indice){
    let listaProductos = await getListaProductos();
    if(listaProductos && indice<listaProductos.length){
        listaProductos.splice(indice,1);
    }
    await persistirProductos(listaProductos);
}
async function getListaMercadosDisponibles(mercadosOcupados){
    let listaMercados = await mercado.getSupermercados();
    for(let mercado of mercadosOcupados){
        for(let i=0;i<listaMercados.length-1;i++){
            let arregloMercado = listaMercados[i].split('|');
            if(mercado == arregloMercado[1]){
                listaMercados.splice(i,1);
            }
        }
    }
    return listaMercados;
}
async function actualizarProducto(indice){
    let listaProductos = await getListaProductos();
    try{
        let datosProducto = listaProductos[indice].split('|');
        while(true){
            console.log("Has seleccionado el siguiente Producto:");
            console.log("0)Nombre de producto:",datosProducto[0]);
            console.log("1)Precio:",datosProducto[1]);
            console.log("Descripcion:");
            console.log("   2)Categoria:",datosProducto[2]);
            console.log("   3)Peso Gramos:",datosProducto[3]);
            console.log("   4)Calorias:",datosProducto[4]);
            console.log("   5)Proveedor:",datosProducto[5]);
            console.log("6)Stock:",datosProducto[6]);
            console.log("Disponibilidad:",datosProducto[7]);
            console.log("8)Fec. Elab.:",datosProducto[8]);
            console.log("9)Fec. Venc.:",datosProducto[9]);
            console.log("10)Mercados:",datosProducto[10]);
            const respuesta1 =  await inquirer
                .prompt([
                    {
                        type:'input',
                        name:'datoAModificar',
                        message:'Escribe el numero del dato que deseas actualizar:(Para salir presiona la tecla q )'
                    }
                ]);
            if(respuesta1.datoAModificar!='q'){
                while(true){
                    let respuesta2 = undefined;
                    if(respuesta1.datoAModificar=='10'){
                        console.log("*****Actualizar mercados de producto*****");
                        console.log("Mercados Asociados Actualmente:");
                        console.log(datosProducto[10]);
                        console.log("Lista de acciones:\n1)Agregar nuevos mercados\n2)Eliminar Mercados\n3)Regresar");
                        const respuestaAccion = await inquirer
                            .prompt([
                                {
                                    type:'input',
                                    name:'opcionAccion',
                                    message:'Ingresa el numeral de la accion que quieras realizar:'
                                }
                            ]);
                        if(respuestaAccion.opcionAccion=='1'){
                            let mercadosOcupados = datosProducto[respuesta1.datoAModificar].split(',');
                            let listaMercDisponibles = await getListaMercadosDisponibles(mercadosOcupados);
                            if(listaMercDisponibles.length==1){
                                console.log("Se han agregado todos los mercados a este producto.");
                            }
                            while (true){
                                console.log("---Mercados Disponibles---")
                                for(let indMerc in listaMercDisponibles){
                                    if(indMerc<listaMercDisponibles.length-1){
                                        console.log(indMerc,' ', listaMercDisponibles[indMerc]);
                                    }
                                }
                                if(listaMercDisponibles.length==1){
                                    console.log("****Todos los mercados han sido agregados a este producto.****");
                                    break;
                                }
                                const respuestaAgregar = await inquirer.prompt([
                                    {
                                        type:'input',
                                        name:'opcionMercAgregar',
                                        message:'Ingresa el numeral del mercado a agregar:(Presiones r para regresar)'
                                    }
                                ]);
                                try{
                                    if(respuestaAgregar.opcionMercAgregar=='r'){
                                        break;
                                    }
                                    let opcionMercado = parseInt(respuestaAgregar.opcionMercAgregar);
                                    if(opcionMercado<listaMercDisponibles.length-1){
                                        let nombreMercadoNuevo = listaMercDisponibles[opcionMercado].split('|')[1];
                                        if(datosProducto[respuesta1.datoAModificar]==''){
                                            datosProducto[respuesta1.datoAModificar]=nombreMercadoNuevo;
                                        }else{
                                            datosProducto[respuesta1.datoAModificar]=datosProducto[respuesta1.datoAModificar]+','+nombreMercadoNuevo;
                                        }
                                        listaMercDisponibles.splice(opcionMercado,1);
                                    }
                                }catch(e){
                                    console.log(e);
                                    break;
                                }
                            }
                        }else{
                            if(respuestaAccion.opcionAccion=='2'){
                                if(datosProducto[respuesta1.datoAModificar]==''){
                                    console.log("No existen mercados asociados.");
                                    break;
                                }
                                let mercadosOcupados = datosProducto[respuesta1.datoAModificar].split(',');
                                while (true){
                                    if(mercadosOcupados.length==0){
                                        break;
                                    }
                                    console.log("****Mercados Actualmente asociados al producto*****");
                                    if(mercadosOcupados.length){
                                        for(let ind in mercadosOcupados){
                                            console.log(ind,' ',mercadosOcupados[ind]);
                                        }
                                    }else{
                                        console.log("No hay ningun mercado asociado a este producto.");
                                    }
                                    const respuestaMercBorrar = await inquirer.prompt([
                                        {
                                            type:'input',
                                            name:'opcionMercBorrar',
                                            message:'Ingresa el numeral del mercado a eliminar:(Presiones r para regresar)'
                                        }
                                    ]);
                                    try{
                                        if(respuestaMercBorrar.opcionMercBorrar=='r'){
                                            break;
                                        }
                                        let indiceSeleccion = parseInt(respuestaMercBorrar.opcionMercBorrar);
                                        if(indiceSeleccion<mercadosOcupados.length){
                                            mercadosOcupados.splice(respuestaMercBorrar.opcionMercBorrar,1);
                                            let cadenaDatosProd ='';
                                            for(let indMercado in mercadosOcupados){
                                                if(indMercado < mercadosOcupados.length-1){
                                                    cadenaDatosProd = cadenaDatosProd + mercadosOcupados[indMercado] +',';
                                                }else{
                                                    cadenaDatosProd = cadenaDatosProd + mercadosOcupados[indMercado];
                                                }
                                            }
                                            datosProducto[respuesta1.datoAModificar]=cadenaDatosProd;
                                        }else{
                                            console.log("No se puede borrar el mercado seleccionado.")
                                        }
                                    }catch (e) {
                                        console.log(e);
                                        break;
                                    }
                                }
                            }
                            if(respuestaAccion.opcionAccion=='3'){
                                break;
                            }
                        }
                    }else{
                        respuesta2 = await inquirer
                            .prompt([
                                {
                                    type:'input',
                                    name:'nuevoValor',
                                    message:'Escribe el nuevo valor:'
                                }
                            ]);
                        if(respuesta1.datoAModificar=='8'||respuesta1.datoAModificar=='9'){
                            if(validarFecha(respuesta2.nuevoValor)){
                                let arregloFecha = respuesta2.nuevoValor.split('-');
                                let fechaNueva = new Date(arregloFecha[2],arregloFecha[1]-1,arregloFecha[0]);
                                respuesta2.nuevoValor = fechaNueva.toString();
                            }else {
                                respuesta2.nuevoValor=datosProducto[respuesta1.datoAModificar];
                                console.log("La fecha ingresada no es valida. Recuerde que el formato es dd-mm-aaaa.");
                            }
                        }
                        datosProducto[respuesta1.datoAModificar]=respuesta2.nuevoValor;
                        if(datosProducto[6]<=0){
                            datosProducto[6]=0;
                            datosProducto[7]=false;
                        }else{
                            datosProducto[7]=true;
                        }
                        break;
                    }
                }
            }else{
                break;
            }
        }
        let filaActualizada='';
        for(let indiceInterior in datosProducto){
            if(indiceInterior<datosProducto.length-1){
                filaActualizada=filaActualizada+datosProducto[indiceInterior]+'|';
            }else{
                filaActualizada=filaActualizada+datosProducto[indiceInterior];
            }
        }
        listaProductos[indice]=filaActualizada;
        const persistencia = await persistirProductos(listaProductos);
    }catch (e) {
        console.log("No se puede actualizar porque no existen registros de productos.");
    }
}

function persistirProductos(listaProductos){
    const promisePersistir = new Promise(
        (resolve, reject)=>{
            let productosAPersistir=""
            for(let producto of listaProductos){
                if(producto!=''){
                    productosAPersistir=productosAPersistir+producto+'\n';
                }
            }
            fs.writeFile('./producto.txt', productosAPersistir,'utf-8', function (err) {
                if (err) {
                    console.log('¡¡¡Error de persistencia de productos!!!');
                }else{
                    console.log('Datos registrados correctamente!');
                    resolve(true);
                }
            });
        }
    );
    return promisePersistir;
}
function appendFileProd(filaProd){
    const promesaAppendProd = new Promise(
        (resolve)=>{
            fs.appendFile('./producto.txt', filaProd, function (err) {
                if (err) throw err;
                console.log('¡Registro de producto correcto!');
                resolve(true);
            });
        }
    );
    return promesaAppendProd;
}
module.exports = {registrarProducto,listarProductos,eliminarProducto,actualizarProducto,appendFileProd}