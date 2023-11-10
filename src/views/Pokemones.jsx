import { useContext } from 'react'
import { PokeContexto } from '../Contexto/PokeContexto'

export default function Pokemones () {
  const { options, setPokemonName, verPokemon } = useContext(PokeContexto)

  return (
    <div className='containerpokemones'>
      <h1>Buscador de Pokemones</h1>
      <div className='divformulario'>
        <form>
          <label>
            <h3>Selecciona un Pokemon</h3>
            <select
              name=''
              id=''
              onChange={(e) => setPokemonName(e.target.value)}
            >
              <option value='Selecciona un Pokemon' />
              {options.map((op, index) => {
                return (
                  <option key={index} value={op}>
                    {op}
                  </option>
                )
              })}
            </select>
          </label>
          <button type='button' onClick={verPokemon}>
            Ver Pokémon
          </button>
        </form>
      </div>
    </div>
  )
}
