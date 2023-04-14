import AvaliacaoCliente from "./AvaliacaoCliente";

export default function Depoimentos() {
    
    return (
        <section className="depoimentos">
            <AvaliacaoCliente
                img = "foto01.jpg"
                nome = "Ana Bruck"
                avaliacao01 = '"Eu recomendo a leticia, pois o atendimento dela fez toda a diferença"'
                avaliacao02 = '"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queriamos."'/>
        </section>
    )
}