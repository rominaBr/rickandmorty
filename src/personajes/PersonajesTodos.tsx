import { useEffect, useState } from "react";
import Card from "../components/Card";


type Char = {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
}

function Personajes(){

    const [personajes, setPersonajes] = useState<Char[]>([]); 

    useEffect(() => {
        requestPersonajes();
    }, []);

    async function requestPersonajes() {
        try{
            const res = await fetch("https://rickandmortyapi.com/api/character")
            const json = await res.json()

            setPersonajes(json.results)
        }
        catch(e){
            console.error(e);
        }
    }

    return(
        <div>
            {personajes ? (
                personajes.map((p) => {
                    return(
                        <Card
                            image={p.image}
                            name={p.name}
                            species={p.species}
                            status={p.status}
                            id={p.id}
                        ></Card>
                    )
                    
                })
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    )
}

export default Personajes