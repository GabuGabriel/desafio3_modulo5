import { useContext } from 'react'
import { PokeContexto } from '../Contexto/PokeContexto'
import { useParams } from 'react-router-dom'

export default function Detalle () {
  const { pokemon, pokemonStats } = useContext(PokeContexto)
  const { pokeName } = useParams()

  return (
    <div className='containerdetalle'>
      <h1> {pokeName} </h1>
      <div className='containerdetallepokemon'>
        <img src={pokemon.img} height={300} alt={`Imagen de ${pokeName}`} />
        <div className='divlista'>
          <ul>
            {pokemonStats[0]?.map((x, i) => {
              return (
                <li key={i}>
                  {x.name}:{' '} {x.value}
                </li>
              )
            })}
            <li>{pokemon.types}</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
