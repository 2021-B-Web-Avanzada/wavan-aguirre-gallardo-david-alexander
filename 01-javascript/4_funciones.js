//04_funciones
function soloNumeros(a,b,c){
    return a-b+c; //valor a devolver
}
//soloNumeros('v',true,[1,2]);
function soloLetras(a,b,c){//undefined
    console.log(a,b,c);
}

//funciones nombradas = named functions
function funcionNombrada(){

}
//funciones anónimas
const funcionSinNombre1 = function () {};
const funcionSinNombre2 = function () {};
const funcionSinNombre3 = function () {};
[].forEach(function () {

});
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Funciones anónimas - Fat Arrow Functions
const funcionArrow =  () => {};
var  funcionaArrow2 = () => {};
let funcionaArrow3 = () => {};
funcionArrow();
funcionaArrow2();
funcionaArrow3();

const funcionFatArrow4 = ()=>{};
const funcionFatArrow5 = (x)=>{
    return x+1;
};
const funcionFatArraow6 = (x) => x+1;//Fat Arrow functions
//una sola línea y omito return, omita llaves

const funcionFatArrow7 = x=> x+1;//SI SOLO TENEMOS UN PARÁMETRO SE OMITE PARENTESIS
const funcionFatArrow8 = (x,y,z) => x+y+z;

// ... = > Parametros infinitos que llegan en un aarreglo
// solo se puede tener una de estos por funcion y debe ser el ultimos de los parametros
function sumarNumeros(...otrosNumeros){
  let total = 0;
  otrosNumeros.forEach(
      (valorActual) =>{
          total = total + valorActual;
      }
  );
  return total;
};
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13);

