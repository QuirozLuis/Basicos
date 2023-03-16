/* Realizar programa donde el usuario introduce números y la computadora 
responde sacando por pantalla los mismos números hasta que el introducido es el número 7. */

const prompt=require("prompt-sync")({sigint:true}); 

do {
    var numero = prompt('Dame un numero: ', '');
    console.log('El numero fue: ', numero);
} while(numero != 7);
