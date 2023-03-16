/* Crear programa para que salgan en pantalla los siguiente números:

54321

4321

321

21

1 */

let numeros = [];

for (var i = 5; i > 0; i--){
    numeros.push(i);
}

console.log(numeros);

for (var i = 1; i < 5; i++){
    numeros.shift();
    console.log(numeros);
}