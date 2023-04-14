export default function AvaliacaoCliente(props){
    return(
        <div className="avaliacaoClientes">
            <img src= {`./img/${props.img}`} alt="" />
            <h2>{props.nome}</h2>
            <p>{props.avaliacao01}</p>
            <p>{props.avaliacao02}</p>
        </div>
    )
}