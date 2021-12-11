const inquirer = require('inquirer');
const fs = require('fs');

let idMercado = Number;
let nombreSupermercado=String;
let identificadorSupermercado = Symbol();
let  detalle= {
    propietario: '',
    CI:''
};
let productos=[];
let empleados=undefined;
let cantidadDeudaSRI = null;
let cantidadSucursales=BigInt(0);

function listarSupermercados(){
    console.log("----------------SUPERMERCADOS----------------------")
    console.log("Indice|Id|Nombre|Cantidad Sucursales|Symbol|Propietario|CI Propietario|Productos|Empleados|Cantidad Deudas");
    fs.readFile('./mercado.txt', 'utf8', function(err, data){
        const filas = data.split('\n');
        for(let i=0;i<filas.length-1;i++){
            console.log(i,filas[i]);
        }
    });
}

module.exports = {
    "listarSupermercados": listarSupermercados()
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
            +'|'+detalle.propietario+'|'+detalle.CI+'|'+''+'|'+empleados+'|'+cantidadDeudaSRI+'\n';
        console.log('Respuesta', infoMercado);
        fs.appendFile('./mercado.txt', infoMercado, function (err) {
            if (err) throw err;
            console.log('Registro de mercado correcto!');
        });
    }catch (e){
        console.error(e);
    }
}

