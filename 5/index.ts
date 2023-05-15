const listaNumeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const separarNumerosPares = (lista: number[]) => {

    const numerosPares: number[] = [];

    lista.map((numero) => {
        if (numero % 2 === 0) {
            return numerosPares.push(numero);
        }
    })

    return numerosPares;

}

console.log(separarNumerosPares(listaNumeros));
