/**
 * Escribe una función en JavaScript que calcule el 
 * factorial de un número entero dado. El factorial 
 * de un número se define como el producto de todos 
 * los enteros positivos desde 1 hasta ese número.
 */

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
    
    return resultado;
}

  // Ejemplo de uso
  console.log(factorial(5)); // Devuelve 120
  console.log(factorial(0)); // Devuelve 1
