import { Link } from "react-router-dom";

type Props = {
    name: string;
    type: string;
    dimension: string;
    id: number;
}

function CardUbicaciones(props: Props){
    return(
        <>            
            <div className= "container">
                <Link to={`/ubicaciones/${props.id}`}>
                    <div className="card">
                        <p>Nombre: {props.name}</p>
                        <p>Tipo: {props.type}</p>
                        <p>Dimensión: {props.dimension}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardUbicaciones