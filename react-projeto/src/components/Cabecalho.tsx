import Image from "next/image";
import logo from "@/assets/logo.png";
import Menu from "./Menu";


export default function Cabecalho(){
    return(

        <div className="bg-[#7B994FA6] w-screen h-[14vh] p-10 flex items-center justify-between">

            <Image
                src={logo}
                alt="Logo do Site"
                className="w-[3.5vw] h-[5.57vw] hover:scale-110 duration-300"
            />

            <div className="flex gap-4">
                <Menu texto="Nossa Casa" href="/pag_luan"></Menu>
                <Menu texto="Serviços"></Menu>
                <Menu texto="Contato"></Menu>
                <Menu texto="Quem Somos"></Menu>
            </div>

        </div>
    );
}