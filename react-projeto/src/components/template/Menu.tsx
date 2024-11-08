import Link from "next/link";

export default function Menu(){
    return (
        <aside className="bg-purple-900 w-80 p-6 flex justify-center items-center">
            <nav className="flex flex-col gap-5">
                <Link href="/">Início</Link>
                <Link href="/primeiro">Primeiro Componente</Link>
                <Link href="/contador">Componente UseState</Link>
                <Link href="/formulario">Formulário</Link>
            </nav>
        </aside>
    );
}