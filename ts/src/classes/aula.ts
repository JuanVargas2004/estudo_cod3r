// Interface + Class = Argumentos Nomeados

interface AulaProps{
    id: number | string,
    nome: string,
    duracaoSeg: number
}

class Aula {
    constructor(readonly props: AulaProps){}

    get id(): number | string {
        return this.props.id
    }

    get nome(): string {
        return this.props.nome
    }

    get duracaoSeg(): number {
        return this.props.duracaoSeg
    }

    duracaoHoras(): string {
        const horas = Math.floor(this.duracaoSeg / 3600)
        const minutos = Math.floor((this.duracaoSeg % 3600) / 60)
        const segundos = this.duracaoSeg % 60

        return `${horas}h ${minutos}m ${segundos}s`
    }
}

const aula1 = new Aula({
    id: 1,
    nome: "Feudalismo",
    duracaoSeg: 456498
})

console.log(aula1)
console.log("\n\n")
console.log(aula1.props)
console.log("\n\n")



console.log(aula1.props.nome)
console.log(aula1.nome)
console.log(aula1.duracaoHoras())
