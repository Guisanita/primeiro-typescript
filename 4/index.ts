const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const listarCidadesComAteOitoCaracteres = (lista: string[]) => {

    const listaCidades: string[] = []

    lista.map((cidade) => {

        if (cidade.length <= 8) {
            return listaCidades.push(cidade)
        }

    })

    return listaCidades;

}

console.log(listarCidadesComAteOitoCaracteres(cidades));
