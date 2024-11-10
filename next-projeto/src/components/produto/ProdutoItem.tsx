import Image from "next/image";
import Produto from "@/data/model/Produto";
import Link from "next/link";

interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps){
    const {produto} = props

    return (
        <Link
            href={`/produtos/${produto.id}`}
            className="flex gap-4 bg-zinc-900 rounded-2xl overflow-hidden"
        >
            <div className="min-w-48 min-h-36 relative flex-shrink-0">
                <Image
                    src={produto.imagemUrl}
                    alt={produto.nome}
                    fill
                />
            </div>

            <div className="flex flex-col justify-center gap-1.5">
                <h1 className="text-2xl font-bold">{produto.nome}</h1>
                <p className="text-xs text-zinc-400">{produto.descricao}</p>
                <span className="text-lg">R$ {produto.preco}</span>
            </div>
            
        </Link>
    )
}
