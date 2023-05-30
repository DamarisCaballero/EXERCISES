/**
 * Encontrar el número más frecuente: Se te pide 
 * escribir una función que tome un arreglo de 
 * números como entrada y encuentre el número 
 * que aparece con mayor frecuencia. Si hay 
 * varios números con la misma frecuencia
 *  máxima, debes devolver cualquiera de ellos.
 *  Por ejemplo, para el arreglo [1, 3, 5, 3, 1,
 *  5, 5], la función debería devolver 5.
 */

function findMostFrequentNumber(numbers) {
    let frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentNumber;

    for (let number of numbers) {
        if (frequencyMap[number]) {
        frequencyMap[number]++;
    } else {
        frequencyMap[number] = 1;
    }

        if (frequencyMap[number] > maxFrequency) {
        maxFrequency = frequencyMap[number];
        mostFrequentNumber = number;
    }
    }

    return mostFrequentNumber;
}

  // Ejemplo de uso
    const numbers = [1, 3, 5, 3, 1, 5, 5];
    const mostFrequent = findMostFrequentNumber(numbers);
  console.log(mostFrequent); // Resultado: 5


