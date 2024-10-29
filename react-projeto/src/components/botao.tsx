// Primeiro Componente - Componente Funcional

export default function Botao(props: any){
    return (
        <button className="bg-red-500 p-2 rounded-md">{props?.label ?? "teste"}</button>
    )
}