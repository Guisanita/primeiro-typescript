const lista = [0, 122, 4, 6, 8, 44];

const verificarLista = (lista: number[]) => {

    const temImpar = lista.some((numero: number) => numero % 2 !== 0);

    if (temImpar) {
        return 'array inválido';
    }

    return 'array válido';

}

console.log(verificarLista(lista));
