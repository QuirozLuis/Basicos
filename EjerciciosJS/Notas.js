/*Programa que lee tres notas de un alumno, calcula la media e indicar el valor de la nota y la 
palabra “Excelente” si tiene un valor mayor que 8 , “Aprobado” entre 5 y 8 , “Suspendido” < 5*/

const prompt=require("prompt-sync")({sigint:true}); 

var nota1, nota2, nota3;

var nota1 = prompt('Dame la primera nota: ', '');
var nota2 = prompt('Dame la segunda nota: ', '');
var nota3 = prompt('Dame la tercera nota: ', '');

var media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

console.log('La nota es: ', media);

if(media >= 8){
    console.log('Excelente');
} else if(media >= 5 && media < 8){
    console.log('Aprobado');
} else {
    console.log('Suspendido');
}