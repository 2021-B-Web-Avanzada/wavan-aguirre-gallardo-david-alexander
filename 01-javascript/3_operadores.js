const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
//FUNCIONES COMO PARAMETRO
//FIND
//denviamos una expresion -> truty falsy
//devuelve el primero que cumpla con esa condicion
const respuestaFind = arreglo
    .find(
  function (valorActual, indiceActual,arregloCompleto){
      console.log('valor actual' , valorActual);
      console.log('indice actual' , indiceActual);
      console.log('arreglo completo' , arregloCompleto);
      return valorActual.nombre ==='Cristian';//Expresion = = =
  }
);
console.log('respuesta find =',respuestaFind);//Christian //Si  no encuentra devuelve undefined

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual,arregloCompleto){
            return valorActual.nombre ==='Cristian';//Expresion = = =
        }
    );
console.log('respuesta index',respuestaIndex);//indice 6// no encuentra -> -1

const respuestaForeach = arreglo.forEach(
    function (valorActual,indiceActual,arregloCompleto){
        console.log('valorActual',valorActual);
    }
);
console.log('respuesta foreach', respuestaForeach);

//A VECES SE REQUIERE MODIFICAR  VALORES EN EL ARREGLO
//MAP (modificar o muta el arreglo y devuelve un nuevo arreglo
// enviamos los datos del nuevo arreglo
// devuelve el nuevo arreglo : son dos arreglos diferentes
const respuestaMap = arreglo.map(
    (valorActual,indiceActual,arregloCompleto)=>{
        const nuevoElemento = {
            id:valorActual.id,
            nombre:valorActual.nombre,
            nota:valorActual.nota+1,
        };
        return nuevoElemento;
    }
);
console.log('respuestaMap',respuestaMap);

//Filter
//Filtrar el arreglo
//enviamos expresion truty falsy
//devuelve elementos que cumplen esa condicion
const resupuestaFilter = arreglo.filter(
    (valorActual,indiceActual,arregloCompleto)=>{
        return valorActual.nota>=14;
    }
);
console.log('filter',resupuestaFilter);
console.log(arreglo);

// some -> expresion
//devuelve booleano
//hay alguno si o no
//or
const respuestaSome = arreglo.some(
    (valorActual, indiceActual,arregloCompleto)=>{
        return valorActual.nota<9;
    }
);
console.log('respuesta SOme',respuestaSome);

// every -> expresion
//devuelve booleano
//todas cumplen si o no
//and
const respuestaEvery = arreglo.every(
    function(valorActual, indiceActual,arregloCompleto){
        return valorActual.nota>14;
    }
);
console.log('respuesta every',respuestaEvery);
