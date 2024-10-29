// Função Construtora

function Botao(props){
    this.label = props?.label ?? "AAAAAAA"
}

const botaozin = new Botao()
console.log(botaozin.label)

const botaozin2 = new Botao("B")
console.log(botaozin2.label)

const botaozin3 = new Botao({label: "Eae"})
console.log(botaozin3.label)