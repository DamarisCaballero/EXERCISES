function acabanEnA(words) {
    for ( let i = 0; i < words.lenght; i++){
        if (words[i].endsWith('a')){
            return false;
        }
    }
    return true;
}

const palabras1 = ["casa", "mesa", "silla"];
console.log(acabanEnA(palabras1)); 

const palabras2 = ["amor", "vida", "familia", "amigo"];
console.log(acabanEnA(palabras2)); 

const palabras3 = ["gato", "perro", "ratón", "conejo"];
console.log(acabanEnA(palabras3)); 

////////////////
function acabanEnA(words) {
    const result = [];

    for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith('a')) {
        result.push(words[i]);
    }
}

    return result;
}

console.log(acabanEnA(['casa', 'coche'])); // ["casa", "coche"]
console.log(acabanEnA(['play', 'balon', 'asa', 'taza', 'tio'])); // ["balon"]
console.log(acabanEnA(['play', 'midu', 'asa', 'libro', 'lino', 'dino'])); // []
