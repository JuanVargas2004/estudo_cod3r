'use server'

import { esperar } from "./utils"
import produtos from '../constants/produtos'

export default async function obterProdutos() {
    esperar(100)
    return produtos
}