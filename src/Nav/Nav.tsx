import { Link } from "react-router-dom"
import "./nav.css"


function Nav(){
    return(
        <>
            <div className="menu">
                <ul>
                    <li><Link to="/"><img src="./src/assets/logo.png" alt="logo" /></Link></li>
                    <li><Link to="/personajes">Personajes</Link></li>
                    <li><Link to="/ubicaciones">Ubicaciones</Link></li>
                    <li><Link to="/episodios">Episodios</Link></li>
                </ul>                
            </div>
        </>
    )
}


export default Nav