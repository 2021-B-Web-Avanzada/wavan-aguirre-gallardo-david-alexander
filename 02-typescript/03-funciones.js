//03 funciones.ts
function sumarNumeros(numeroInicial) {
    var numerosInfinitos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosInfinitos[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
sumarNumeros(1, 1, 2, 3, 4, 5);
function imprimir(mensaje) {
    console.log('Hola ' + mensaje);
}
var arregloNumeros = [1, 2];
var arregloNumeroDos = [1, 2];
var arregloNumeroTres = [1, 'dos', true];
var arregloNumeroCuatro = [[4], 'dos', true];
var arregloNumerosCinco = [1, 2];
arregloNumerosCinco = ['uno', 'dos'];
