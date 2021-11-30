//Ejercicio de lectura ye scritura
const fs = require('fs');


function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path,
        'utf-8',
        (error, contenidoAntes)=>{
            if (error){
                console.log({mensaje:"Error al leer el archivo a escribir.",error:error});
            }else{
                let contenidoNuevoTotal = contenidoAntes + '\n' +contenidoNuevo;
                fs.writeFile(
                    path,
                    contenidoNuevoTotal,
                    'utf-8',
                    (error)=>{
                        if(error){
                            console.log({mensaje:"Error al escribir.",error:error});
                        }else{
                            console.log("Escritura realizada correctamente.");
                        }
                    }
                )
            }
        }
    )
}
escribirArchivo('./6_ejemplo.txt','45678989');
