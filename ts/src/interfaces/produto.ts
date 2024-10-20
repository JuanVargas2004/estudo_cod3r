interface Produto{
    id: number | string
    nome: string
    preco: number
    descricao: string | null
    imagem: string
}

const produto1: Produto = {
    id: 1,
    nome: "Carregador de IPhone",
    preco: 17.99,
    descricao: "Carregamento rápido",
    imagem: "imagem.png"
}

const produto2: Partial<Produto> = {
    id:2,
    nome: "notebook",
    preco: 1000
}


console.log(produto1)
console.log(produto2)