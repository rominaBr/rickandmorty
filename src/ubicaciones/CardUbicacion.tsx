
type Props = {
    name: string;
    type: string;
    dimension: string;
    created: string;
    id: number;
}

function CardUbicacion(props: Props){
    return(
        <div className="container">
            <div className="cardUbicacion">
                <p>Nombre: {props.name}</p>
                <p>Tipo: {props.type}</p>
                <p>Dimension: {props.dimension}</p>
                <p>Creación: {props.created}</p>
            </div>
        </div>
    )
}

export default CardUbicacion