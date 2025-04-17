/*let listar = (lista, itemprocurado) => {
    lista.forEach((valorAtual, i) => {
        console.log(`[${i}] ${valorAtual}`);
        if(valorAtual === itemprocurado){
            console.log(`O item ${itemprocurado} foi encontrado na posição ${i}`);
        }
    });
};

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
listar(listaSeriados, "Dexter");*/

let listar = (lista, itemProcurado) => {
    let encontrado = false;
    let posicao = -1;

    lista.forEach((valorAtual, i) => {
        console.log(`[${i}] ${valorAtual}`);
        if (valorAtual === itemProcurado) {
            encontrado = true;
            posicao = i;
        }
    });

    if (encontrado) {
        console.log(`\nO item "${itemProcurado}" foi encontrado na posição ${posicao}.`);
    } else {
        console.log(`\nO item "${itemProcurado}" não foi encontrado na lista.`);
    }
};

const listaSeriados = [
    "Breaking Bad", 
    "Game of Thrones", 
    "Stranger Things", 
    "Chernobyl", 
    "Dexter", 
    "The Last Dance", 
    "This is Us"
];

listar(listaSeriados, "Friends");
