/**
 * Escribe un programa que imprima los números del 
 * 1 al 100. Pero para los múltiplos de 3, en lugar 
 * de imprimir el número, imprime "Fizz". Para los
 *  múltiplos de 5, imprime "Buzz". Y para los 
 * números que son múltiplos tanto de 3 como de 
 * 5, imprime "FizzBuzz".
 */

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
