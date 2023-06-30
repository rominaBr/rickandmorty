import { useEffect, useState } from "react";
import CardUbicaciones from "./CardUbicaciones";


type Location = {
    name: string;
    type: string;
    dimension: string;
    id: number;
}

function Ubicaciones(){

    const [ubicaciones, setUbicaciones] = useState<Location[]>([])

    useEffect(() => {
        requestEpisodios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestEpisodios() {
        try{
            const res = await fetch("https://rickandmortyapi.com/api/location")
            const json = await res.json()

            setUbicaciones(json.results)
           
        }
        catch(e){
            console.error(e);
        }
    }

    return(
        <div>
            {ubicaciones ? (
                ubicaciones.map((ubi) => {
                    return(
                        <CardUbicaciones name={ubi.name} type={ubi.type} dimension={ubi.dimension} id ={ubi.id}/>
                    )                    
                })
            ): (
                <h1>Cargando...</h1>
            )}
        </div>
    )
}

export default Ubicaciones