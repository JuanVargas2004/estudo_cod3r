import Contador from "@/components/Contador";
import Pagina from "@/components/template/Pagina";

export default function PaginaContador(){
    return (
        <Pagina>
            <div className="flex flex-col gap-10 justify-center items-center">
                <Contador valorInicial={100}/>
                <Contador/>
            </div>
        </Pagina>
    );
}