const producto= require('./producto.js');
const mercado= require('./supermercado.js');
const inquirer= require('inquirer');
const Console = require("console");
 async function seleccionarOpcionMenuPrincipal(){
     let continuar = true;
     while (continuar){
         console.log("----------------Bienvenido Supermercado-Productos----------------");
         console.log("¿Que deseas gestionar?");
         console.log("1)Supermercado\n2)Producto");
         const respuestaMP = await inquirer
             .prompt([
                 {
                     type:'input',
                     name: 'opcionMenuPrincipal',
                     message: 'Ingrese el numeral correspondiente a la opcion:(Presione otra tecla para salir)'
                 }
             ]);
         switch (respuestaMP.opcionMenuPrincipal) {
             case '1':
                 console.log("-------Modulo Supermercados-----------");
                 await seleccionarCRUDMercados();
                 break;
             case '2':
                 console.log("-------Modulo Productos--------");
                 await seleccionarCRUDProductos();
                 break;
             default:
                 continuar=false;
                 break;
         }
     }
}
async function seleccionarCRUDMercados(){
     let continuarCRUDMercado = true;
     while(continuarCRUDMercado){
         await mercado.listarSupermercados().then(
             async (data)=>{
                 console.log("1)Registrar\n2)Actualizar\n3)Eliminar");
                 const seleccion =  await inquirer.
                 prompt([
                     {
                         type:'input',
                         name: 'opcionMercadoCRUD',
                         message: 'Ingrese el numeral correspondiente a la opcion:'
                     }
                 ]);
                 switch (seleccion.opcionMercadoCRUD){
                     case '1':
                         await mercado.registrarMercado();
                         break;
                     case '2':
                         await mercado.listarSupermercados();
                         const mercadoIndice = await inquirer.prompt([
                             {
                                 type:'input',
                                 name: 'opcionMercado',
                                 message: 'Ingrese el numeral correspondiente al mercado:'
                             }
                         ]);
                         await mercado.actualizarMercado(mercadoIndice.opcionMercado);
                         break;
                     case '3':
                         await mercado.listarSupermercados();
                         const mercadoABorrar = await inquirer.prompt([
                             {
                                 type:'input',
                                 name: 'opcionMercadoBorrar',
                                 message: 'Ingrese el numeral correspondiente al mercado que desee borrar:'
                             }
                         ]);
                         await mercado.eliminarMercado(mercadoABorrar.opcionMercadoBorrar);
                         break;
                     default:
                         continuarCRUDMercado=false;
                         Console.log("Salio de Mercado");
                         break;
                 }
             }
         )
             .catch(
                 async (error)=>{
                     console.log("Creando archivo...");
                     await mercado.appendFilaMercado("");
                 }
             );

     }

}
async function  seleccionarCRUDProductos(){
    let continuarCRUDProd = true;
    while(continuarCRUDProd){
        await producto.listarProductos().then(
            async ()=>{
                console.log("1)Registrar\n2)Actualizar\n3)Eliminar");
                const seleccion =  await inquirer.
                prompt([
                    {
                        type:'input',
                        name: 'opcionProdCRUD',
                        message: 'Ingrese el numeral correspondiente a la opcion:'
                    }
                ]);
                switch (seleccion.opcionProdCRUD){
                    case '1':
                        await producto.registrarProducto();
                        break;
                    case '2':
                        await producto.listarProductos();
                        const prodIndice = await inquirer.prompt([
                            {
                                type:'input',
                                name: 'opcionProd',
                                message: 'Ingrese el numeral correspondiente al producto:'
                            }
                        ]);
                        await producto.actualizarProducto(prodIndice.opcionProd);
                        break;
                    case '3':
                        await producto.listarProductos();
                        const prodABorrar= await inquirer.prompt([
                            {
                                type:'input',
                                name: 'opcionProdBorrar',
                                message: 'Ingrese el numeral correspondiente al producto que desee borrar:'
                            }
                        ]);
                        await producto.eliminarProducto(prodABorrar.opcionProdBorrar);
                        break;
                    default:
                        continuarCRUDProd=false;
                        Console.log("Salio de Producto");
                        break;
                }
            }
        ).catch(
            async ()=>{
                console.log("Escribiendo archivo ...");
                await producto.appendFileProd("");
            }
        );

    }
}
seleccionarOpcionMenuPrincipal();
