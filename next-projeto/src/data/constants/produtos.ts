import Produtos from "../model/Produto"

const produtos: Produtos[] = [

    {
        id: 1,
        nome: "Monitor 24'",
        descricao: "Monitor de 24 polegadas Full HD com bordas finas, ideal para produtividade, jogos e entretenimento. Oferece excelente qualidade de imagem, baixo tempo de resposta e tecnologia antirreflexo para maior conforto visual.",
        preco: 250.00,
        imagemUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        id: 2,
        nome: "Mouse Gaming",
        descricao:  "Mouse gamer ergonômico com alta precisão, equipado com sensor óptico de última geração. Conta com iluminação RGB personalizável e botões programáveis, perfeito para jogadores que buscam desempenho e estilo.",
        preco: 100.00,
        imagemUrl: "https://images.unsplash.com/photo-1628832307345-7404b47f1751?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        id: 3,
        nome: "Teclado Mechanico",
        descricao: "Teclado mecânico compacto com switches de alta durabilidade, proporcionando uma experiência de digitação tátil e precisa. Inclui iluminação RGB ajustável e design ergonômico para uso prolongado sem desconforto.",
        preco: 150.00,
        imagemUrl: "https://images.unsplash.com/photo-1626958390898-162d3577f293?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

]

export default produtos;