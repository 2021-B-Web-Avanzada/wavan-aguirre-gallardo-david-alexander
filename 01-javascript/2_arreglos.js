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

arreglo.push(11);//Aniadir elementos al final
//[6,7,8,9,10,11]
arreglo.pop();//eliminal al final un elemento
//[6,7,8,9,10]
arreglo.unshift(5);//Aniadir al principio del arreglo
//[5,6,7,8,9,10]
console.log(arreglo);

//Metpdp splice agregar en el indice 0
arreglo.splice(0,0,4);
//splice(indice,elementos eliminados,itemsagregar)
//El arreglo.splice(0,3,1,2,3,4,5,6)
//[4,5,6,7,8,9,10]
console.log(arreglo);
const indiceNueve = arreglo.indexOf(9);//ecnuentra el primero elemento y devuelve el indice
arreglo.splice(indiceNueve,2);
//[4,5,6,7,8]
console.log(arreglo);