type Props = {
    prev: string;
    next: string;
    onAnterior: any;
    onSiguiente: any;
}


function Pagination(props:Props){

    const handleAnterior = () =>{
        props.onAnterior();
    }

    const handleSiguiente = () =>{
        props.onSiguiente();
    }

    return(
        <nav>
            <ul className="pagination">
                {
                    props.prev != null ? (
                        <li>
                            <button onClick={handleAnterior}>Anterior</button>
                        </li>
                    ):(
                        null
                    )
                }
                {
                    props.next ? (
                        <li>
                            <button onClick={handleSiguiente}>Siguiente</button>
                        </li>
                    ) : (
                        null
                    )
                }
                                
            </ul>
        </nav>
    )
}

export default Pagination