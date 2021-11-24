//Destructuracion de objetos
const adrian = {
    nombre:'David'
};
const carolina = {
    nombre:"Carloina",
    apellido:"Sarmiento"
};
const AdrianCarolina = {//creando nueva referencia
    ...carolina, //El orden es importante para propiedades que se repiten
    ...adrian, //El último reemplaza a los anteriores
};
console.log('adrianCarolina',AdrianCarolina);

//DESTRUCTURACION DE ARREGLOS
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno,
    ...arregloDos,
];
console.log('superArreglo', superArreglo);
console.log(...superArreglo);