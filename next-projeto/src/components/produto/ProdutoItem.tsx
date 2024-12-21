import Produto from "@/data/model/Produto";
import Image from "next/image";
import Link from "next/link";


interface produtoProps{
    produto: Produto
}

export default function ProdutoItem(props: produtoProps){

    const {produto} = props

    return (

        <Link href={`/produtos/${produto.id}`}>

            <div className="mb-5 bg-[#333232] min-h-36 min-w-48 flex flex-shrink-0 overflow-hidden rounded-2xl">
                
                <Image
                    src={produto.imagemUrl}
                    alt={`Foto do produto: ${produto.nome}`}
                    width={200}
                    height={100}
                />

                <div className="w-full flex flex-col items-center gap-2">
                    <h2 className="mt-1 text-xl font-bold">{produto.nome}</h2>
                    
                    <div className="max-w-[calc(100%-5rem)] text-center flex flex-col gap-2">
                        <p>{produto.descricao}</p>
                        <p className="mb-1 font-light">Preço: R${produto.preco}</p>
                    </div>

                </div>
            
            </div>

        </Link>

    )
    
}