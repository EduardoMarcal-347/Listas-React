import AvaliacaoCliente from "./AvaliacaoCliente";

export default function Depoimentos() {
    
    function getJsonAvaliacoes(){
        let filename = './json/avaliacaoClientes.json'
        let vetAvaliacao = []
        fetch(filename)
        .then(response => response.json())
        .then(data => Object.values(data).forEach(e => vetAvaliacao.push(e)))
        .catch(error => console.error(error))
        return vetAvaliacao;
    }

    let avaliacaoClientes = getJsonAvaliacoes();
    console.log(avaliacaoClientes);

    return (
        <section className="depoimentos">
            <AvaliacaoCliente
                img = "foto02.jpg"
                nome = "Ana Bruck"
                avaliacao01 = '"Eu recomendo a leticia, pois o atendimento dela fez toda a diferença"'
                avaliacao02 = '"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queriamos."'/>
            <AvaliacaoCliente
                img = "foto02.jpg"
                nome = "Dani Schutz"
                avaliacao01 = '"Eu recomendo a leticia, pois o atendimento dela fez toda a diferença"'
                avaliacao02 = '"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queriamos."'/>
            <AvaliacaoCliente
                img = "foto03.jpg"
                nome = "Bia Wolf"
                avaliacao01 = '"Eu recomendo a leticia, pois o atendimento dela fez toda a diferença"'
                avaliacao02 = '"A escolha de um imóvel, no nosso caso uma casa, não é uma tarefa fácil. A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queriamos."'/>
        </section>
    )
}