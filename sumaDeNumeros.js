function sumarPares(numeros) {
    let suma = 0;

    for(let i = 0; i < numeros.lenght; i++){
        const num = numeros[i];

        if (num % 2 === 0){
        suma += num;
        }
    }
    return suma;
}