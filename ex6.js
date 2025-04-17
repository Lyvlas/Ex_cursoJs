
let chaves = objeto => {
    console.log(Object.keys(objeto));
}


const item = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
  }

chaves(item)