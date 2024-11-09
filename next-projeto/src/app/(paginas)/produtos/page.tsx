import obterProdutos from "@/data/service/obterProdutos"

export default async function PaginaProdutos(){
    const produtos = await obterProdutos()
    
    return (
        <div>Produtos</div>
    )
}