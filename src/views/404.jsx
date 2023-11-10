import { NavLink } from 'react-router-dom'

export default function Pagina404 () {
  return (
    <div className='style404'>
      <h2>404 </h2>
      <h2>Pagina no encontrada</h2>
      <h2>La pagina que estas buscando no existe</h2>
      <NavLink to='/'>
        <button>Volver a Home</button>
      </NavLink>
    </div>
  )
}
