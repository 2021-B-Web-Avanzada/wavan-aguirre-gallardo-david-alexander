//06_callbacks.js
//how to import modules
const fs = require('fs');//filesystem
console.log("Primero");
//06_example.txt
fs.readFile(
    './1_variables.js',
    'utf-8',
    (error,contenido)=>{
        if(error){
            console.log("Error variables=",{mensaje:"error al leer variables",error:error});
        }else{
            console.log("exito al leer contenido =", contenido);
        }
    }
);
fs.readFile(
    './6_ejemplo.txt',
    'utf-8',
    (error, contenido)=>{
        if(error){
            console.log({mensaje:"error al leer el contenido.", error:error});
        }else{
            console.log("contenido =" , contenido);

        }
    }
);

console.log("TERCERO");

fs.readFile(
    './6_ejemplo.txt',
    'utf-8',
    (error, contenido)=>{
        if(error){
            console.log({mensaje:"error al leer el contenido.", error:error});
        }else{
            fs.readFile(
                './1_variables.js',//2
                'utf-8',
                (errorVariable, contenidoVariable) => {
                    if(errorVariable){
                        console.log({mensaje:"Error al leer variable", error:errorVariable});
                    }else{
                        console.log(contenido,contenidoVariable);
                    }
                }
            )
            console.log("contenido =" , contenido);

        }
    }
);

console.log("TERCERO");