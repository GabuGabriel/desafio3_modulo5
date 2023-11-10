import React, { useContext, useEffect, useState } from 'react';
import { PokeContexto } from '../Contexto/PokeContexto';

export default function Detalle() {
  const { selectedPokemon, apiUrl } = useContext(PokeContexto);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (selectedPokemon) {
        const response = await fetch(`${apiUrl}${selectedPokemon}`);
        const data = await response.json();
        setPokemonDetails(data);
      }
    };

    fetchPokemonDetails();
  }, [selectedPokemon, apiUrl]);

  if (!selectedPokemon || !pokemonDetails) {
    return (
      <div className="containerdetalle">
        <h1>Detalles</h1>
        <p>No se ha seleccionado ningún Pokémon o no se encontraron detalles.</p>
      </div>
    )
  }

  const { name, sprites, stats, types } = pokemonDetails

  return (
    <div className="containerdetalle">
      <h1>Detalle de {name}</h1>
      <div className="containerdetallepokemon">
        <h2>{name}</h2>
        <img src={sprites.front_default} alt={`Imagen de ${name}`} />
        <ul>
          {stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
          <li>Type: {types.map((type) => type.type.name).join(', ')}</li>
        </ul>
      </div>
    </div>
  )
}
