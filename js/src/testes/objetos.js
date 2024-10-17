// // const frutas = ["maçã", "banana", "laranja"]

// // console.log(frutas)

// // frutas.push("uva")
// // console.log(frutas)

// // console.log('pop: ', frutas.pop())
// // console.log(frutas)

// // frutas.unshift("mamão")
// // console.log(frutas)

// // console.log("shift: ",frutas.shift())
// // console.log(frutas)


// const frutas = ["maçã", "banana", "laranja", "tomate"]

// const vegetais = ["cenoura", "tomate", "batata"]

// const comida = frutas.concat(vegetais)

// // console.log(comida)

// const index = comida.indexOf("tomate")
// // console.log(index)


// if (index !== -1){
//     comida.splice(index, 1)
// }


// console.log(comida)
// comida.sort()
// console.log(comida)

// console.log(typeof comida)


array = [1,2,3,4,5,6,7,8,9,10]

function multi3(n){
    return n * 3
}

var triplo = array.map(multi3)

const pares = array.filter(n => n % 2 == 0 )

console.log(pares)