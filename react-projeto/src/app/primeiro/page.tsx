import Botao from "@/components/Botao";
import Pagina from "@/components/template/Pagina";

export default function PrimeiraPag(){
    return(
        <Pagina>
            <div className="flex gap-3">
                <Botao label="Salvar"/>
                <Botao label="Cancelar"/>
            </div>
        </Pagina>
    )
}