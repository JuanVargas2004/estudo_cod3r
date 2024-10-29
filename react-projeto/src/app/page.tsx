import Botao from "@/components/botao";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex gap-2">
        <Botao href="/primeiro"/>
        <Link href="/primeiro">Primeiro Componente</Link>
    </div>

  )
}
