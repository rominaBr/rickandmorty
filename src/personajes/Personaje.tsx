import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPersonaje from "./CardPersonaje";

type Char = {
    image: string;
    name: string;
    species: string;
    status: string;
    gender: string;
    origin: {name: string, url: string};
    type: string;
    id: number;
}

function Personaje(){

    const [personaje, setPersonaje] = useState<Char>(); 
    const {id} = useParams();

    useEffect(() => {
        requestPersonaje();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestPersonaje() {
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const json = await res.json()

            setPersonaje(json)
            console.log(personaje)
        }
        catch(e){
            console.error(e);
        }
    }
    return(
        <div>
            {personaje ? (
                <div>
                    <CardPersonaje image={personaje.image} name={personaje.name} species={personaje.species} status={personaje.status} gender={personaje.gender} origin={{
                        name: personaje.origin.name,
                        url: personaje.origin.url
                    }} type={personaje.type} id={personaje.id} />
                </div>
                
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    )
    
}

export default Personaje