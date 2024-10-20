// Class sem interface = Argumentos Posicionais

class Curso{
    constructor(
        readonly id: string | number,
        public nome: string,
        public duracaoSeg: number
    ){}

    duracaoHoras(): string {
        const horas = Math.floor(this.duracaoSeg / 3600)
        const minutos = Math.floor((this.duracaoSeg % 3600) / 60)
        const segundos = this.duracaoSeg % 60

        return `${horas}h ${minutos}m ${segundos}s`
    }
}


const curso1 = new Curso(1, "Curso de Inglês", 456498)
console.log(curso1)
console.log(curso1.duracaoHoras())
