import Link from "next/link";
import MenuItem from "@/components/template/MenuItem";

export default function PaginaFilhaComLayout(){
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <h1>Conteúdo da página FILHA</h1>
            
            <div className="flex gap-3">
            <Link href="/layout" className="bg-red-400 px-3 py-2 rounded-3xl">
                Voltar
            </Link>
            
            <Link href="/" className="bg-blue-500 px-3 py-2 rounded-3xl">
                Voltar para tela principal
            </Link>
            </div>
        </div>
    );
}