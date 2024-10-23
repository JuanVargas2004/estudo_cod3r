import { Carrinho } from "./model/Carrinho";
import removerItensZerados from "./functions/removerItens"
import {calcularTotal, calcularDesconto} from "./functions/calcular"

const carrinhoOriginal: Carrinho = {
    itens: [
        {id: 1, nome: "Arroz", preco: 10, quantidade: 2},
        {id: 2, nome: "Feijão", preco: 5, quantidade: 4},
        {id: 3, nome: "Carne", preco: 20, quantidade: 1},
        {id: 4, nome: "Refrigerante", preco: 5, quantidade: 6},
        {id: 5, nome: "KFC", preco: 1, quantidade: 0},
    ],
    cupom: 0.1,
    total: 0,
    totalComDesconto: 0
}

const carrinhoNovo = removerItensZerados(carrinhoOriginal);
console.log(carrinhoNovo);

const carrinhoTotal = calcularTotal(carrinhoNovo);
console.log(carrinhoTotal);

const carrinhoDesconto = calcularDesconto(carrinhoTotal)
console.log(carrinhoDesconto)
