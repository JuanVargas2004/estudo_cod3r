'use server'
import produtos from "../constants/produtos"
import { esperar } from "./utils"


export default async function obterProdutosPorId(id:number) {
    await esperar(3000)
    const produto = produtos.find((produto) => produto.id === id)
    return produto
    
}