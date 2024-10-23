import ItemCarrinho from "./ItemCarrinho";

export interface Carrinho{
    readonly itens: ItemCarrinho[];
    readonly cupom?: number;
    total: number;
    totalComDesconto: number;
}
