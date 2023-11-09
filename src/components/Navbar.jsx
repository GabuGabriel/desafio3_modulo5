import { NavLink } from "react-router-dom";
import '../App.css'
import iconopokemon from '../assets/images/pokemonpin.svg'
export default function Navbar () {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined);
  return (
    <>
      <nav className="navcss">
        <div className="pokepin">
          <NavLink className={setActiveClass} to="/">
            <img src={iconopokemon} alt="pinpokemon" height={45} width={45} />
          </NavLink>
        </div>
        <div className="divlinks">
          <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>
          |
          <NavLink className={setActiveClass} to="/Pokemones">
            Pokemones
          </NavLink>
        </div>
      </nav>
    </>
  )
}
