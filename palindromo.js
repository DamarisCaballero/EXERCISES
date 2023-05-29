function esPalindromo(cadena) {
  // Eliminar espacios y convertir a minúsculas
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
  // Comparar la cadena original con su versión invertida
    return cadena === cadena.split('').reverse().join('');
}

// Ejemplo de uso
console.log(esPalindromo('Anita lava la tina')); // Devuelve true
console.log(esPalindromo('Hola mundo')); // Devuelve false


/**   
 * Ejercicio 1: Palíndromo
Escribe una función en JavaScript que tome una cadena 
como entrada y determine si es un palíndromo. 
Un palíndromo es una palabra o frase que se 
lee igual de izquierda a derecha y viceversa, 
ignorando los espacios en blanco, la puntuación y
 el uso de mayúsculas o minúsculas.
 */