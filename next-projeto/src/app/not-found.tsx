import Image from "next/image";
import explorador from "@/assets/explorador.jpg"
import { IconCornerDownLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Pagina404(){
    return (
        <div className="flex flex-col items-center h-screen w-screen bg-black">
            <Image 
                src={explorador} 
                alt="Error 404" 
                width={500}
                height={300}
                priority
            />
            
            <h1>Ah, olá! Parece que você está meio perdido...</h1>
            <h1>Mas não se preocupe, caminho de volta é por ali</h1>

            <Link href="/">
                <IconCornerDownLeft size={70}></IconCornerDownLeft>
            </Link>
        </div>
    );
}