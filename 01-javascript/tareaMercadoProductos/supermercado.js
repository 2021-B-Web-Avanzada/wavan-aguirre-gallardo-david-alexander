const inquirer = require('inquirer');
const fs = require('fs');
const Console = require("console");

let idMercado = Number;
let nombreSupermercado=String;
let identificadorSupermercado = Symbol();
let  detalle= {
    propietario: '',
    CI:''
};
let empleados=undefined;
let cantidadDeudaSRI = null;
let cantidadSucursales=BigInt(0);

async function listarSupermercados(){
    let errorLectura = false;
    console.log("----------------SUPERMERCADOS----------------------")
    console.log("Indice|Id|Nombre|Cantidad Sucursales|Symbol|Propietario|CI Propietario|Empleados|Cantidad Deudas");
    const promesaLeerArchivo = new Promise(
        async (resolve,reject)=>{
            try {
                fs.readFile('./mercado.txt', 'utf8', function(err, data){
                    if(err){
                        console.log("¡¡¡¡¡¡Error de lectura de archivo!!!!!!!!");
                        reject(err);
                    }else{
                        let filas = data.split('\n');
                        for(let i=0;i<filas.length-1;i++){
                            console.log(i,filas[i]);
                        }
                        resolve(true);
                    }
                });
            }catch (e) {
                console.log("entra");
                appendFilaMercado("");
                resolve(false);
            }

        }
    );
    return promesaLeerArchivo;
}
function getSupermercados(){
    const promesaLeerArchivo = new Promise(
        (resolve)=>{
            fs.readFile('./mercado.txt', 'utf8', function(err, data){
                if(err){
                    console.log("¡¡¡¡¡¡Error de lectura de archivo!!!!!!!!")
                }else{
                    let filas = data.split('\n');
                    resolve(filas);
                }
            });
        }
    );
    return promesaLeerArchivo;
}
    async function registrarMercado(){
    try{
        const respuesta = await inquirer
            //nombre Mercado
            .prompt([
                {
                    type:'input',
                    name:'nombreMercado',
                    message:'Ingresa el nombre del supermarket:'
                },
                {
                    type:'input',
                    name: 'cantidadSucursales',
                    message: 'Ingresa la cantidad de sucursales:'
                },
                {
                    type:'input',
                    name: 'nombrePropietario',
                    message: 'Ingresa el nombre del propietario:'
                },
                {
                    type:'input',
                    name: 'cedulaPropietario',
                    message: 'Ingresa la cedula de propietario:'
                }
            ]);
        idMercado=Math.floor(Math.random()*((9999-1)+1));
        nombreSupermercado = respuesta.nombreMercado;
        identificadorSupermercado = Symbol.for(nombreSupermercado);
        detalle.propietario=respuesta.nombrePropietario;
        detalle.CI=respuesta.cedulaPropietario;
        cantidadSucursales = respuesta.cantidadSucursales;
        const infoMercado = idMercado+'|'+nombreSupermercado+'|'+cantidadSucursales+'|'+String(identificadorSupermercado)
            +'|'+detalle.propietario+'|'+detalle.CI+'|'+empleados+'|'+cantidadDeudaSRI+'\n';
        await appendFilaMercado(infoMercado);

    }catch (e){
        console.error(e);
    }
}
async function eliminarMercado(indice){
    let listaMercados = await getSupermercados();
    if(listaMercados && indice<listaMercados.length){
        listaMercados.splice(indice,1);
    }
    await persistirMercados(listaMercados);
}
async function actualizarMercado(indice){
    let listaMercados = await getSupermercados();
    try{
        let datosMercado = listaMercados[indice].split('|');
        while(true){
            console.log("Has seleccionado el siguiente Mercado:");
            console.log("ID:",datosMercado[0]);
            console.log("1)Nombre de mercado:",datosMercado[1]);
            console.log("2)Cantidad Sucursales:",datosMercado[2]);
            console.log("Symbol:",datosMercado[3]);
            console.log("Detalle:");
            console.log("   4)Propietario:",datosMercado[4]);
            console.log("   5)CI Propietario:",datosMercado[5]);
            console.log("6)Empleados:",datosMercado[6]);
            console.log("7)Deuda SRI:",datosMercado[7]);
            const respuesta1 =  await inquirer
                .prompt([
                    {
                        type:'input',
                        name:'datoAModificar',
                        message:'Escribe el numero del dato que deseas actualizar:(Para salir presiona la tecla q )'
                    }
                ]);
            try {
                let indice = parseInt(respuesta1.datoAModificar);
                if(indice>datosMercado.length-1){
                    break;
                }
            }catch (e){
                console.log(e);
                break;
            }
            if(respuesta1.datoAModificar)
                if(respuesta1.datoAModificar!='q'){
                    const respuesta2 = await inquirer
                        .prompt([
                            {
                                type:'input',
                                name:'nuevoValor',
                                message:'Escribe el nuevo valor:'
                            }
                        ]);
                    datosMercado[respuesta1.datoAModificar]=respuesta2.nuevoValor;
                }else{
                    break;
                }
        }
        let filaActualizada='';
        for(let indiceInterior in datosMercado){
            if(indiceInterior<datosMercado.length-1){
                filaActualizada=filaActualizada+datosMercado[indiceInterior]+'|';
            }else{
                filaActualizada=filaActualizada+datosMercado[indiceInterior];
            }
        }
        listaMercados[indice]=filaActualizada;
        const persistencia = await persistirMercados(listaMercados);
    }catch(e){
        console.log("No se puede actualizar porque no hay registros.")
    }
}
function persistirMercados(listaMercados){
    const promisePersistir = new Promise(
        (resolve, reject)=>{
            let mercadosAPersistir=""
            for(let mercado of listaMercados){
                if(mercado!=''){
                    mercadosAPersistir=mercadosAPersistir+mercado+'\n';
                }
            }
            fs.writeFile('./mercado.txt', mercadosAPersistir,'utf-8', function (err) {
                if (err) {
                    console.log('¡¡¡Error de persistencia de mercados!!!');
                }else{
                    console.log('Datos registrados correctamente!');
                    resolve(true);
                }
            });
        }
    )
    return promisePersistir;
}
function appendFilaMercado(filaMercado){
    const promesaAppendArchivo = new Promise(
        (resolve)=>{
            fs.appendFile('./mercado.txt', filaMercado, function (err) {
                if (err) throw err;
                console.log('Registro de mercado correcto!');
                resolve(true);
            });
        }
    );
    return promesaAppendArchivo;
}
module.exports = {registrarMercado,listarSupermercados, eliminarMercado, actualizarMercado, getSupermercados,appendFilaMercado};