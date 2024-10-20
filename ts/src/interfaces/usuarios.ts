interface Usuario{
    id: number | string
    nome: string
    email: string
    senha?: string | null
    ativo: boolean
}

let usuario1: Usuario = {
    id: 1,
    nome: "João",
    email: "joao@gmail.com",
    senha: null,
    ativo: true
}

console.log(usuario1)