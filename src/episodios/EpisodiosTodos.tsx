import { useEffect, useState } from "react";
import CardEpisodios from "./CardEpisodios";
import Pagination from "../components/Pagination";

type Episodios = {
    name: string;
    episode: string;
    id: number;
}

type Info = {
    next: string;
    prev: string;
}

function Episodios(){

    const [episodios, setEpisodios] = useState<Episodios[]>([]); 
    const [info, setInfo] = useState<Info>();
    const URL = "https://rickandmortyapi.com/api/episode"

    useEffect(() => {
        requestEpisodios(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestEpisodios(url:string) {
        try{
            const res = await fetch(url)
            const json = await res.json()
            
            setInfo(json.info)
            setEpisodios(json.results)
        }
        catch(e){
            console.error(e);
        }
    }

    const onAnterior = () => {
        requestEpisodios(`${info?.prev}`)
    }

    const onSiguiente = () => {
        requestEpisodios(`${info?.next}`)
    }

    return(
        <>
            <Pagination prev={`${info?.prev}`} next={`${info?.next}`} onAnterior={onAnterior} onSiguiente={onSiguiente} />
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
                    <span className="loader"></span>
                )}
            </div>
        </>
    )
}

export default Episodios