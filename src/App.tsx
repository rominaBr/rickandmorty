import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home'
import Layout from './Nav/Layout'
import Personaje from "./personajes/Personaje"
import Episodios from "./episodios/EpisodiosTodos"
import NotFound from "./components/NotFound"
import Ubicaciones from "./ubicaciones/Ubicaciones"
import Ubicacion from "./ubicaciones/Ubicacion"
import Episodio from "./episodios/Episodio"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/personajes' element={<Home/>}/>            
            <Route path='/ubicaciones'element={<Ubicaciones/>}/>
            <Route path='/episodios' element={<Episodios/>}/>
            <Route path='/personajes/:id' element={<Personaje/>}/>
            <Route path='/ubicaciones/:id' element={<Ubicacion/>}/>
            <Route path='/episodios/:id' element={<Episodio />}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
            
        </Routes>
      </Router>
      
    </>
  )
}

export default App
