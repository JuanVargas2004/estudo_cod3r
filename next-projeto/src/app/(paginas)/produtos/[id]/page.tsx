import obterProdutoPorId from "@/data/service/obterProdutoId";

export default async function PaginaProdutoPorId(props: any){
    const produto = await obterProdutoPorId(+props.params.id)

    if (!produto) return <div>Página não encontrada</div>
    else return <div>{produto.nome}</div>
}  