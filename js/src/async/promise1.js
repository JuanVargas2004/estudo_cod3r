async function pegarDados(){
    const resultadoConvertido = await fetch("https://api.github.com/users/JuanVargas2004").then(resultado => resultado.json())

    console.log(resultadoConvertido)

}
console.log("Antes do async")
pegarDados()
console.log("Depois do async")

// async function testeSimples(){return "Dá um like ai"}

// console.log(testeSimples().then(resultado => console.log(resultado)))