const fs = require('fs');
//Ejercicio lectura escritua con promesas
function promesaLeerArchivo(path){
    const promesaLeer = new Promise(
        (resolve)=>{
            fs.readFile(
              path,
              'utf-8',
                (error, contenido)=>{
                  if(error){
                      console.log("error al leer archivo.");
                  }else{
                      resolve(contenido);
                  }
                }
            );
        }
    );
    return promesaLeer;
}
function promesasEscribirArchivo(path, contenidoActual, nuevoContenido){
    const proemsaEscribir = new Promise(
        (resolve)=>{
            contenidoActual = contenidoActual +'\n' +nuevoContenido;
            fs.writeFile(
                path,
                contenidoActual,
                'utf-8',
                (error)=>{
                    if(error){
                        console.log({mensaje:"Error al escribir.",error:error});
                    }else{
                        resolve(contenidoActual);
                    }
                }
            );
        }
    );
    return proemsaEscribir;
}
function ejercicio(path, nuevoContenido){
    const promesaEscribirYMostrar = new Promise(
        (resolve)=>{
            promesaLeerArchivo(path)
            .then(
                    (datos)=>{
                        promesasEscribirArchivo(path,datos,nuevoContenido)
                            .then(
                                (datosOtros)=>{
                                    console.log(datosOtros);
                                    resolve(datosOtros);
                                }
                            )

                    }
            );
        }
    );
    return promesaEscribirYMostrar;

}
ejercicio('./6_ejemplo.txt',"Escribiendo ... Buenos dias");
