// Criação de promises

// Promise resolve
const simplePromise = new Promise((resolve, reject) => {
    
    resolve("Promise resolvida")
})

console.log(simplePromise)
simplePromise.then(result => console.log(result))


// Promise reject
const simplePromise2 = new Promise((resolve, reject) => {

    reject("Promise rejeitada")
})

console.log(simplePromise2)
while(true){}
simplePromise2.catch(error => console.log(error))