interface Animal{
    nome: string,
    tipo: "terrestre" | "aquatico"
    domestico: boolean
}

// const cachorro: Animal = {
//     nome: "Cachorro",
//     tipo: "terrestre",
//     domestico: true
// }

// console.log(cachorro)

interface Pet extends Animal{
    dono: string
}

const cachorro: Pet = {
    nome: "Pingo",
    tipo: "terrestre",
    domestico: true,
    dono: "Gicelda"
}

console.log(cachorro)