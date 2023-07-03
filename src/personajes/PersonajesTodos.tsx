import { useEffect, useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";


type Char = {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    img: string;
};

type Info = {
    next: string;
    prev: string;
}

function Personajes(){

    const [personajes, setPersonajes] = useState<Char[]>([]); 
    const [info, setInfo] = useState<Info>();
    const URL = "https://rickandmortyapi.com/api/character" 

    useEffect(() => {
        requestPersonajes(URL);
    }, []);

    async function requestPersonajes(url:string) {
        try{
            const res = await fetch(url)
            const json = await res.json()
            setInfo(json.info)
            setPersonajes(json.results)
                    
        }
        catch(e){
            console.error(e);
        }
    }

    const onAnterior = () => {
        requestPersonajes(`${info?.prev}`)
    }

    const onSiguiente = () => {
        requestPersonajes(`${info?.next}`)
    }
    


    return(
        <>
           
            <Pagination onAnterior={onAnterior} onSiguiente={onSiguiente} prev={`${info?.prev}`} next={`${info?.next}`}/>
            <div>
                {personajes ? (
                    personajes.map((p) => {
                        if(p.status == "Dead"){
                            p.img = "🔴"
                        } else if(p.status == "Alive"){
                            p.img = "✔️"
                        }else {
                            p.img = "❔"
                        }                   
                        return(
                            <Card
                                image={p.image}
                                name={p.name}
                                img = {p.img}
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
        </>
    )
}

export default Personajes