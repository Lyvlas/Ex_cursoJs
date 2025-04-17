let listar = (lista, trecho) => {
    let encontrado = [];

    lista.forEach((valorAtual, i) => {
        if (valorAtual.toLowerCase().includes(trecho.toLowerCase())) {
            encontrado.push({nome: valorAtual});
        }
    });

    if (encontrado.length > 0){
        console.log(`Itens que contem "${trecho}": `)
        encontrado.forEach(item => {
            console.log(`-${item.nome}`)
        })
    }else {
        console.log(`Nenhum item encontrado "${trecho}".`)
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

listar(listaSeriados, "D");