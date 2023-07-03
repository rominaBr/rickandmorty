import { useEffect, useState } from "react";
import CardUbicaciones from "./CardUbicaciones";
import Pagination from "../components/Pagination";


type Location = {
    name: string;
    type: string;
    dimension: string;
    id: number;
}

type Info = {
    next: string;
    prev: string;
}

function Ubicaciones(){

    const [ubicaciones, setUbicaciones] = useState<Location[]>([])
    const [info, setInfo] = useState<Info>();
    const URL = "https://rickandmortyapi.com/api/location" 

    useEffect(() => {
        requestEpisodios(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestEpisodios(url:string) {
        try{
            const res = await fetch(url)
            const json = await res.json()

            setInfo(json.info)
            setUbicaciones(json.results)
           
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
                {ubicaciones ? (
                    ubicaciones.map((ubi) => {
                        return(
                            <CardUbicaciones name={ubi.name} type={ubi.type} dimension={ubi.dimension} id ={ubi.id}/>
                        )                    
                    })
                ): (
                    <span className="loader"></span>
                )}
            </div>
        </>
    )
}

export default Ubicaciones