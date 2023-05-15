const estante = [
    'Guerra e Paz',
    'A Montanha Mágica',
    'Cem anos de Solidão',
    'Dom Quixote',
    'A Divina Comédia'
]

const encontreLivro = (estante: string[], livro: string) => {

    const posicao: number = estante.findIndex((titulo) => titulo == livro);

    if (posicao < 0) {
        return 'Livro não encontrado';
    }

    const posicaoReal: number = posicao + 1;

    return `O livro está na posição ${posicaoReal}`;

}

console.log(encontreLivro(estante, 'Dom'));
