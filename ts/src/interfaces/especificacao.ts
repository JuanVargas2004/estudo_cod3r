interface Especificacao{
    marca: string,
    modelo: string,
    placaDeVideo: string,
    memoria: string,
    processador: string,
    armazenamento: string,
    [extra: string]: any
}

let computador: Especificacao = {
    marca: "Asus",
    modelo: "TUF Gaming",
    placaDeVideo: "NVIDIA GeForce GTX 1650",
    memoria: "8GB DDR4",
    processador: "Intel Core i5-10400F",
    armazenamento: "512GB SSD",
    bluethooh: true,
    leitorDVD: false
}

console.log(computador)
