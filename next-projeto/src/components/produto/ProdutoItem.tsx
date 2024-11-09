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
            className="flex gap-4 bg-zinc-900 rounded-md overflow-hidden"
        >
            <div className="min-w-48 min-h-36">
                <Image src={produto.imagemUrl} alt={produto.descricao}/>
            </div>

            <div className="flex flex-col justify-center">
                <h1>{produto.nome}</h1>
                <p>{produto.descricao}</p>
                <span>{produto.preco}</span>
            </div>
            
        </Link>
    )
}
