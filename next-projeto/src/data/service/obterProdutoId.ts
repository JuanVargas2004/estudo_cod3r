'use server'
import { esperar } from './utils'
import produtos from '../constants/produtos'

export default async function obterProdutoPorId(id: number) {
    await esperar(100)
    const produto = produtos.find((produto) => produto.id === id)
    return produto
}