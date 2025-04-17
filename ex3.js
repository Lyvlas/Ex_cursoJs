let raiz = (lista) => {
    const resultado = lista.map((valor, i) => {
        return {
            indice: i,
            Valor: valor,
            "Raiz Quadrada": Math.sqrt(valor)
        };
    });

    console.table(resultado); // mostra a tabela
};

const lista = [4, 9, 16, 25, 36, 49];    
raiz(lista);
