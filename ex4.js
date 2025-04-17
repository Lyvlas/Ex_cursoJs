// Ordenação de numeros 

let ordenar = (lista) => {
    return lista.sort((a, b) => a - b);
}

const lista = ([4, 9, 7, 1, 8, 12])
console.log(ordenar(lista));    