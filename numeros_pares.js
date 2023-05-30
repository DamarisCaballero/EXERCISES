/**
 * Encontrar la suma de los números pares: 
 * Se te pide escribir una función que tome
 *  un arreglo de números como entrada y 
 * devuelva la suma de todos los números 
 * pares en el arreglo.
 */

function sumNumbers(numbers) {
    let sum = 0;
    for (let number of numbers){
        if (number % 2 === 0) {
            sum += number;
        }
    }
    return sum;
}
    const numbers = [ 1,2,3,4,5,6,7,8,9,10,11];
    const sum = sumNumbers( numbers);
    console.log(sum); // resultado: 30 