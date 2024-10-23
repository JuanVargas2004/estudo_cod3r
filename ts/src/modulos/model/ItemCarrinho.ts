// O default permite apenas uma exportação por arquivo

export default interface ItemCarrinho {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
}


// Também é possível exportar múltiplos itens
// const num: number = 2;
// export {ItemCarrinho, num};