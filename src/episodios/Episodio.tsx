import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

type Episode= {
    name: string;
    episode: string;
    characters: Array<string>;
}

function Episodio(){

    const { id } = useParams()
    const [episodio, setEpisodio] = useState<Episode>()

    useEffect(() => {
        requestEpisodio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestEpisodio() {
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            const json = await res.json()

            setEpisodio(json)
        }
        catch(e){
            console.error(e);
        }
    }


    return(
        <div>
            {episodio ? (
                <div>
                    <div>
                        <p>Nombre del Episodio: {episodio.name}</p>
                        <p>Episodio y Temporada: {episodio.episode}</p>
                    </div>
                    <div>                        
                              
                    </div>
                </div>
            ) : (

                <h1>Cargando...</h1>

            )}
        </div>
    )
}

export default Episodio