export default function Botao(props: any){
    return (
        <button className="bg-green-400 p-2 rounded-md">{props.label ?? "Ok"}</button>
    )
}