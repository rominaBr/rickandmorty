import { Link } from "react-router-dom";
import "./card.css"

type Props = {
    image: string;
    name: string;
    species: string;
    status: string;
    id: number;
};

function Card(props: Props){
    return(
        
            <div className='container'>
                <Link to={`/personajes/${props.id}`}>
                    <div className='card'>
                        <img src={props.image} alt="artista" />
                        <div className='texto'>
                            <h4>{props.name}</h4>
                            <p>{props.status} - {props.species}</p>
                        </div>
                    </div>
                </Link>
            </div>
       
       
        
    )
}

export default Card