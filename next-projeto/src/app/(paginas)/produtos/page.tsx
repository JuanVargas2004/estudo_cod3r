import ProdutoItem from "@/components/produto/ProdutoItem";
import Image from "next/image";
import obterProdutos from "@/data/service/obterProdutos"

export default async function PaginaProdutos(){
    const produtos = await obterProdutos()
    
    return (
        <div className="flex flex-col gap-6">
            <h1 className="font-black text-xl">Lista de Produtos</h1>
            <div className="flex flex-col gap-5">
                {produtos.map((produto) => (
                    <div key={produto.id}>{produto.nome}
                        <Image
                            src={produto.imagemUrl}
                            alt={produto.nome}
                            width={500}
                            height={300}

                        />
                        <p>{produto.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}