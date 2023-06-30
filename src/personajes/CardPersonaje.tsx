import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


type Props = {
    image: string;
    name: string;
    species: string;
    status: string;
    gender: string;
    origin: {name: string, url: string};
    type: string;
    id: number;
};

type Ubicacion = {
    id: number;
}


function CardPersonaje(props: Props){    

    const [ubicacion, setUbicacion] = useState<Ubicacion>();

    useEffect(() => {
        requestUbicacion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestUbicacion() {
        try{
            const res = await fetch(`${props.origin.url}`)
            const json = await res.json()

            setUbicacion(json)
        }
        catch(e){
            console.error(e);
        }
    }


    return(
        <>
            <div className="cardPersonaje">
                <div><img src={props.image} alt={props.name} /></div>
                <div>
                    <p>Nombre: {props.name}</p>
                    <p>Estado: {props.status}</p>
                    <p>Especie: {props.species}</p>
                    <p>Tipo: {props.type}</p>
                    <p>Género: {props.gender}</p> 
                    {ubicacion ? (
                         <p><Link to={`/ubicaciones/${ubicacion.id}`}>Origen: {props.origin.name}</Link></p>
                    ):(
                        <p>Origen: {props.origin.name}</p>
                    )}                   
                   
                </div>
            </div>
        </>
    )
}

export default CardPersonaje;