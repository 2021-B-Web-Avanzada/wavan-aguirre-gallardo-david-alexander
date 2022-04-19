const fs = require('fs')
function escribirArchivo(contenido, path){
    fs.writeFile(
        path,
        contenido,
        "utf-8",
        (error)=>{
            if(error){
                console.log("Error al escribir archivo ",error)
            }else{
                fs.readFile(
                    "./archivo.txt",
                    "utf-8",
                    (error,contenido)=>{
                        if(error){
                            console.log("Error al leer archivo ",error)
                        }else{
                            console.log("Leer exitoso y resultado = ", contenido)
                        }
                    }
                )
            }
        }
    )
}
escribirArchivo("Hola Escribiendo Nuevo","./archivo.txt")
