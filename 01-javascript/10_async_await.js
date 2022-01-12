const promesaLeerArchivo= ()=>{
    return new Promise(
        (res, rej)=>{
            res('CONTENIDO LEER ARCHIVO');
        }
    );
}
const promesaEscribirArchivo = ()=>{
    return new Promise(
        (res,rej)=>{
            res('CONTENIDO ESCRIBIR ARCHIVO');
        }
    );
}
//ASYNC Y AWAIT
//1)METODOS DE CLASES
//2) CUALQUIER FUNCION
//no SE PUEDE HACER ESTO
//CONST RESPUESTA = await promesaEscribirArchivo;
const ejemplo1 = async function (){}
const ejemplo2  = async ()=>{}
async function ejercicio(){
    console.log('1');
    let nuevoContenido = '';
    try {
        console.log('2');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }catch (error){
        console.error(error);
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}
//AL MOMENTO DE USAR ASYNC ESA FUNCION SE CONVIERTE EN UNA PROMESA
ejercicio().then(
    (data)=>{
        console.log('ESTA ES LA RESPUESTA DEL ASYNC AWAIT', data);
    }
).catch().finally();