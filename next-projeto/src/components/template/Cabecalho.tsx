import { IconBrandNextjs } from "@tabler/icons-react";

export default function Cabecalho(){
    return (
        <header className="flex justify-between items-center bg-[#011733] px-6 py-3">
            <a className="flex items-center gap-4" href="https://github.com/JuanVargas2004" target="blank">
                <div className="bg-blue-50 rounded-full">
                    <IconBrandNextjs size={40} color="#000000"></IconBrandNextjs>
                </div>
                Aprendendo Next
            </a>
            <div className="flex justify-center items-center w-9 h-9 bg-gray-100 rounded-full text-black">US</div>
        </header>
    );
}