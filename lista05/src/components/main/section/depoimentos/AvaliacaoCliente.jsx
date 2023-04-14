export default function AvaliacaoCliente(props){
    return(
        <div>
            <h2>{props.nome}</h2>
            <img src= {`./img/${props.img}`} alt="" />
            <p>{props.avaliacao01}</p>
            <p>{props.avaliacao02}</p>
        </div>
    )
}