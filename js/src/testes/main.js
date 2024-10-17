// var nome = ["Juan", "Mariano", "Jefersson"]
// var idade = [19,20,21]

// const item = [
//     {nome: "Juan", idade:19},
//     {nome: "Mariano", idade:20},
//     {nome: "Jefersson", idade:21}
// ]


// for (let i = 0; i < item.length; i++) {
//     const pessoa = item[i]
//     console.log(pessoa.nome, pessoa.idade * 5)
// }

// console.log(pessoa)




// var items = [
//     {nome: "Compra 1", preco: 75.23, id:1},
//     {nome: "Compra 2", preco: 15.50, id:2},
//     {nome: "Compra 3", preco: 42.25, id:3}
// ]


// for (let i = 0; i < items.length; i++){
//     let item = items[i]
//     console.log((item.preco/3))
//     console.log((item.preco/3).toFixed(2))
//     console.log((item.preco/3).toExponential(2))
//     console.log("\n")
// }


// var items = [
//     {nome: "Compra 1", preco: 75.23, id:1},
//     {nome: "Compra 2", preco: 15.50, id:2},
//     {nome: "Compra 3", preco: 42.25, id:3}
// ]

// for (let item of items){
//     console.log(item)
// }


function print(item){
    console.log(item)
}


let dividir = (a,b) => {
    return a/b
}

let multiplicar = (a,b) => a*b

print(dividir(50,5))
print(multiplicar(50,5))


let dobrar = (array) => array.map(n => n*2)

print(dobrar([4, 5]))