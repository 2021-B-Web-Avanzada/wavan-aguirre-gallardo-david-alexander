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
  false: 'Aguirre',
  edad: 32,
  hijos: null,
  zapatos: undefined,
    casado: false,
    ropa:{
      color: '',
        talla: '',
    },
    mascotas: ['Cachetes','Pequitas','Panda'],
};