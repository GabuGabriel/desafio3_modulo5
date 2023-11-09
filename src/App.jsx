import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Detalle from './views/Detalle'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Pagina404 from './views/404'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />
        <Route path="/Detalle" element={<Detalle />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
