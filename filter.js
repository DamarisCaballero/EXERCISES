const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})

console.log(evenNumbers) // [2, 4, 6]


/**************************************
/**************************************
/**************************************/
const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']

/**************************************
/**************************************
/**************************************/

const numbers1 = [1, 2, 3]

const doubleNumbers = numbers1.map((number) => {
  return number * 2
})

console.log(doubleNumbers) // [2, 4, 6]
/**************************************
/**************************************
/**************************************/
const strings1 = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = strings1.map((string) => string.length)

console.log(stringsLength) // [4, 10, 4, 12]
/**************************************
/**************************************
/**************************************/
const numbers2 = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers2
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]