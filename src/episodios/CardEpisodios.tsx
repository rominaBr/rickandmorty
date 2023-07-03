import { Link } from "react-router-dom";

type Props = {
    name: string;
    episode: string;
    id: number;
}

function CardEpisodios(props: Props){

    return(
        <>
            
            <Link to={`/episodios/${props.id}`}>
                <div className="card">                    
                    <p>{props.name}</p>
                    <p>{props.episode}</p>
                </div>
            </Link>
        </>
    )
}

export default CardEpisodios