async function fatosChuckNorris(){
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json()
    return data.value
}

async function obterFatosEmSequencia(){
    const fato1 = await fatosChuckNorris()
    const fato2 = await fatosChuckNorris()
    const fato3 = await fatosChuckNorris()
    return ["Sequência: ", fato1, fato2, fato3]
}

 
function obterFatosEmParalelo(){
    const label = Promise.resolve("Paralelo: ")
    const fato1 = fatosChuckNorris()
    const fato2 = fatosChuckNorris()
    const fato3 = fatosChuckNorris()
    return Promise.all([label, fato1, fato2, fato3])
}

// obterFatosEmSequencia().then(console.log)
// obterFatosEmParalelo().then(console.log)



function esperarPor(segundos){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, segundos * 1000)
    })
}

async function executar(){
    console.log("Início")
    
    await esperarPor(2)
    console.log("Depois de 2 segundos")

    await esperarPor(3)
    console.log("Depois de mais 3 segundos")

    await esperarPor(5)
    console.log("Depois de mais 5 segundos")

    console.log("Fim")
}

// executar()


async function executarParalelo(){
    console.log("Início")
    
    esperarPor(2)
    console.log("Depois de 2 segundos")

    esperarPor(3)
    console.log("Depois de mais 3 segundos")

    esperarPor(5)
    console.log("Depois de mais 5 segundos")

    console.log("Fim")
}

executarParalelo()