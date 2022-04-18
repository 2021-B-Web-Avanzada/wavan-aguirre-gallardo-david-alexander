//01-javascript
//  /1_variables.js
//mutables e inmutables
//mutables
var numeroUno = 1;
let numeroDos = 2;

numeroUno=5;
numeroDos=8;

numeroUno=false;
numeroDos=true;

//inmutables
constConfiguracionArchivos = "pdf";
constListaDeConstantes = ""

//Tipos de variables
const numero =1;
const sueldo = 1.2;
const texto = "David";
const apellido = "Aguirre";
const boolean = false;
const hijos = null;
const zapatos = undefined;

console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd"));
console.log(Number("asd"));

//Truty Falsy
if(""){
    console.log("String vacio es verdadero");
}else{
    console.log('String vacio es falsy');
}

if("David"){
    console.log("String con datos es TRUTY");
}else{
    console.log("String con datos False");
}
//truty o falsy con numeros
if(-1){
    console.log("Negativos es truty");
}else{
    console.log('Negativos es falso');
}

if(0){
    console.log("Cero es TRUTY");
}else{
    console.log("Cero es False");
}
if(1){
    console.log("Positivos es TRUTY");
}else{
    console.log("positivos False");
}


//NUll y undefined
if (null){
    console.log("null es truty");
}else{
    console.log("null es false");
}

if (undefined){
    console.log("undefined es truty");
}else{
    console.log("undefined es false");
}

//Objetos JS (JSON) - ARREGLOS
const david = {
  nombre:"David",//llave: valor
  apellido: 'Aguirre',
  edad: 32,
  hijos: null,
  zapatos: undefined,
    casado: false,
    ropa:{
      color: '',
        talla: '',
    },
    mascotas: ['Cachetes','Pequitas','Panda'],
    gastos: undefined,
};
//Notar que existen estas dos formas de acceder a las propiedades del objeto
david.nombre;
david.apellido;
david['nombre'];
console.log(david);
david.nombre = "Alexander";
david.sueldo;//undefined
console.log(david.sueldo);
david.sueldo=1.2;
console.log("sueldo = " + sueldo);
david.gastos=12.5;
console.log(david.gastos);
david.nombre=undefined;
console.log(david);
console.log(Object.keys(david));
console.log(Object.values(david));

//BOrrar llaves dentro de un objeto
delete david.nombre;
console.log(david);


//Variables por valor o por referencia
//Variables por valor en JavaScript son las primitivas
let edadDavid = 34;
let edadAlexander = edadDavid;//Guardamos por valor y no por referencia
//
console.log(edadDavid);
console.log(edadAlexander);

edadDavid=edadDavid+1;
console.log(edadDavid);
console.log(edadAlexander);


//variables por referencia
// let rafael = {
//     nombre:"rafael",
// }
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre="Lenin";
// console.log(rafael);
// console.log(lenin);
//
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);
//Manera correcta con variables por referencia para clonar al objeto
let rafael = {
    nombre:"rafael"
};
let lenin = Object.assign( {},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre="Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

//cLONAR UN Arreglo
let arregloDeNumerso = [1,2,3,4,5];
let arregloClonado = Object.assign([],arregloDeNumerso);
console.log(arregloDeNumerso);
console.log(arregloClonado);
arregloDeNumerso[0]=150;
arregloClonado[0]=100;
console.log(arregloClonado);
console.log(arregloDeNumerso);