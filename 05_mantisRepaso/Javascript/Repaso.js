const fs = require('fs')
function leerArchivo(path){
    let contenidoActual=""
    const promesaLeerArchivo = new Promise(
        (resolve,reject)=>{
            fs.readFile(
                path,
                "utf-8",
                (error,contenido)=>{
                    if(error){
                        console.log("Error de lectura de archivo.");
                        reject("Error leyendo archivo")
                    }else{
                        contenidoActual=contenido
                        console.log("Se lee correctamente ", contenidoActual);
                        resolve(contenidoActual)
                    }
                }
            )
        }
    )
    return promesaLeerArchivo
}
async function escribirArchivo(contenido, path){
    let contenidoActual=""
    contenidoActual=await leerArchivo(path)
    console.log("datos=", contenidoActual)
    let contenidoActualizado = contenidoActual + '\n'+ contenido
    fs.writeFile(
        path,
        contenidoActualizado,
        "utf-8",
        (error)=>{
            if(error){
                console.log("Error al escribir archivo ",error)
            }else{
                console.log("El archivo se escribio correctamente.")
                // fs.readFile(
                //     "./archivo.txt",
                //     "utf-8",
                //     (error,contenido)=>{
                //         if(error){
                //             console.log("Error al leer archivo ",error)
                //         }else{
                //             console.log("Leer exitoso y resultado = ", contenido)
                //         }
                //     }
                // )
            }
        }
    )
}
escribirArchivo("Todo bien ?","./archivo.txt")
