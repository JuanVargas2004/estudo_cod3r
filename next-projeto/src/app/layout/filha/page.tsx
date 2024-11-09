import Link from "next/link";

export default function PaginaFilhaComLayout(){
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <h1>Conteúdo da página FILHA</h1>
            
            <div className="flex gap-3">
            <Link href="/layout" className="botao bg-red-400">
                Voltar
            </Link>
            
            <Link href="/" className="botao bg-green-500">
                Voltar para tela principal
            </Link>
            </div>
        </div>
    );
}