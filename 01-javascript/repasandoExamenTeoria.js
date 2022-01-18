const fs = require('fs');
async function promesaLeer(){
    const promesaLeer = new Promise(
        async (resolve,reject)=>{
            fs.readFile(
                './6_ejemplo.txt',
                'utf-8',
                async (error, contenido)=>{
                    if(error){
                        console.log({mensaje:"error al leer el contenido.", error:error});
                        reject({mensaje:"Error al leer"})
                    }else{
                        console.log(contenido)
                        resolve(true);
                    }
                }
            );
        }
    );
    return promesaLeer;
}

