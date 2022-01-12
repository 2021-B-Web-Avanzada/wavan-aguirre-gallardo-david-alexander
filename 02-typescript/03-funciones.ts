//03 funciones.ts
function sumarNumeros(
        numeroInicial: number,
        ...numerosInfinitos: number[]
){
    return numeroInicial;
}
sumarNumeros(1,1,2,3,4,5);

function imprimir(mensaje:string):void{
    console.log('Hola '+mensaje);
}

const  arregloNumeros:number[] = [1,2];
const arregloNumeroDos: Array<number> = [1,2];
const arregloNumeroTres: (number|string|boolean)[]= [1,'dos',true];
const arregloNumeroCuatro: (Array<number>|string|boolean)[] = [[4],'dos',true];
let arregloNumerosCinco: number[]|string[] = [1,2];
arregloNumerosCinco = ['uno','dos'];