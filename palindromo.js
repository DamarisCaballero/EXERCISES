function esPalindromo(cadena) {
  // Eliminar espacios y convertir a minúsculas
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
  // Comparar la cadena original con su versión invertida
    return cadena === cadena.split('').reverse().join('');
}

// Ejemplo de uso
console.log(esPalindromo('Anita lava la tina')); // Devuelve true
console.log(esPalindromo('Hola mundo')); // Devuelve false
