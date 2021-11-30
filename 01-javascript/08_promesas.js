//08-promesas.js
const fs = require('fs');

function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise(
        (resolve,reject)=>{
            if(numero%2==0){
                resolve(numero);
            }else{
                reject("No es par = (");
            }
        }
    );
    return miPrimeraPromesa;
}
function promesaElevarAlCuadrado(numero){
    const miPrimeraPromesa = new Promise(
        (resolve,reject)=>{
            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado);
        }
    )
    return miPrimeraPromesa;
}
promesaEsPar(6)
.then(
    (datos)=>{
        console.log(datos);
        return promesaElevarAlCuadrado(datos);
    }
)//try
    .then(
        (datosElevarAlCuadrado)=>{
            console.log(datosElevarAlCuadrado);
        }
    )
.catch(
    (error)=>{
        console.log(error);
    }
)//catch
.finally()//finally