//ARREGLOS
let arreglo = [6,7,8,9,10];
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "David","Alexander", undefined, null, {},[1,2]];
arreglo = [6,7,8,9,10];




//Tipos de For
//For of y for in
//for of
for (let number of arreglo) {
//valores
    console.log('numero',number);
}
for (let indice in arreglo) {//INDICES
    arreglo[indice];
    console.log('indice',indice);
}
let objetoPrueba = {a:'1',b:'2',c:'3'};
for (let llave in objetoPrueba) {
    console.log('llave',llave);
}