/**
 * Invertir una cadena de palabras: Se te pide 
 * escribir una función que tome una cadena de 
 * palabras separadas por espacios como entrada
 *  y devuelva una cadena con las palabras 
 * invertidas en orden. Por ejemplo, para 
 * \la cadena "Hola mundo, soy Damaris", 
 * la función debería devolver "Damaris soy mundo, Hola".
 */

function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}

  // Ejemplo de uso
    const sentence = 'Hola mundo, soy Damaris';
    const reversedSentence = reverseWords(sentence);
  console.log(reversedSentence); // Resultado: 'aloH ,odnum yos siramaD'
