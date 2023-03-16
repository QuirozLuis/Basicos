/*Realizar programa donde el usuario introduce 2 números y el ordenador 
responde sacando por pantalla la suma, resta, multiplicación y división de ambos números*/

const prompt=require("prompt-sync")({sigint:true}); 

var x, y, suma, resta, multiplicacion, división;

var x = prompt('Dame el primer numero: ', '');
var y = prompt('Dame el segundo numero: ', '');
//x = 50;
//y = 2;

if (y == 0) {
    suma = Number(x) + Number(y);
    resta = x - y;
    multiplicacion = x * y;
    división = 'error';
    console.log('suma: ', suma);
    console.log('resta', resta);
    console.log('multiplicacion', multiplicacion);
    console.log('division', división);
} else {
    suma = Number(x) + Number(y);
    resta = x - y;
    multiplicacion = x * y;
    división = x / y;
    console.log('suma: ', suma);
    console.log('resta', resta);
    console.log('multiplicacion', multiplicacion);
    console.log('division', división);
}