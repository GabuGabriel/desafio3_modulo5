import { useContext } from 'react'
import { PokeContexto } from '../Contexto/PokeContexto'

export default function Detalle () {
  const { pokemon, pokemonStats, pokemonName } = useContext(PokeContexto)

  return (
    <div className='containerdetalle'>
      <h1 style={{ textTransform: 'capitalize' }}> {pokemonName} </h1>
      <div className='containerdetallepokemon'>
        <img src={pokemon.img} height={350} alt={`Imagen de ${pokemonName}`} />
        <div className='divlista'>
          <ul style={{ textTransform: 'capitalize' }}>
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
