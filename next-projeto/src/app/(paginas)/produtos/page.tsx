import ProdutoItem from "@/components/produto/ProdutoItem"
import obterProdutos from "@/data/service/obterProdutos"

export default async function PaginaProdutos(){
    const produtos = await obterProdutos()

    return (

        <div className="w-full flex flex-col items-center">

            <h1 className="text-4xl mb-10 ml-[200px] font-bold">Lista de Produtos</h1>

            <div className="w-full">

                {produtos.map((produtos) => (
                    <ProdutoItem key={produtos.id} produto={produtos}></ProdutoItem>
                ))}

            </div>

        </div>

    )
}