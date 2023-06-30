import { useEffect, useState } from "react";
import CardEpisodios from "./CardEpisodios";

type Episodios = {
    name: string;
    episode: string;
    id: number;
}

function Episodios(){

    const [episodios, setEpisodios] = useState<Episodios[]>([]);     

    useEffect(() => {
        requestEpisodios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestEpisodios() {
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/episode`)
            const json = await res.json()

            setEpisodios(json.results)
        }
        catch(e){
            console.error(e);
        }
    }
    return(
        <>
            <div>
                {episodios ? (
                    episodios.map((epi) => {
                        return(
                            <div className="container">
                                <CardEpisodios name={epi.name} episode={epi.episode} id={epi.id} />                                
                            </div>                            
                        )
                        
                    })
                ) : (
                    <h1>Cargando...</h1>
                )}
            </div>
        </>
    )
}

export default Episodios