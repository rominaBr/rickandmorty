import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardUbicacion from "./CardUbicacion";

type Location = {
    name: string;
    type: string;
    dimension: string;
    created: string;
    id: number;
}


function Ubicacion(){

    const [ubicacion, setUbicacion] = useState<Location>()
    const {id} = useParams();

    useEffect(() => {
        requestUbicacion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestUbicacion() {
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
            const json = await res.json()

            setUbicacion(json)
        }
        catch(e){
            console.error(e);
        }
    }


    return(
        <div>
            {ubicacion ? (
                <CardUbicacion name={ubicacion.name} type={ubicacion.type} dimension={ubicacion.dimension} created={ubicacion.created} id={ubicacion.id}/>
            ):(
                <span className="loader"></span>
            )}
        </div>
    )
}

export default Ubicacion