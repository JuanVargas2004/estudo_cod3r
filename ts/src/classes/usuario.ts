// Class sem interface = Argumentos Posicionais


// // Redundância

class Usuario{
    id: number | string
    nome: string
    email: string
    ativo: boolean
    senha?: string

    constructor(id: number, nome: string, email: string, ativo: boolean, senha: string = "não informada"){
        this.id = id,
        this.nome = nome,
        this.email = email,
        this.ativo = ativo,
        this.senha = senha
    }
}

const usuarioLogado: Usuario = new Usuario(1, "Juan", "juan@gmail.com", true)
// console.log(usuarioLogado)



// //  Sem redundância

class Usuario2{
    constructor(
        readonly id: number | string,
        readonly nome: string,
        readonly email: string,
        readonly ativo: boolean
    ){}
}

const usuarioLogado2: Usuario2 = new Usuario2(1, "Juan", "juan@gmail.com", true)
console.log(usuarioLogado2)

