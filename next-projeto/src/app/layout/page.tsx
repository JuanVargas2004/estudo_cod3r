import Link from "next/link";

export default function PaginaComLayout(){
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1>Conteúdo da página RAIZ</h1>
            <Link href="/layout/filha" className="bg-blue-500 px-3 py-2 rounded-3xl">
                Ir para a página filha
            </Link>
        </div>
    );
}