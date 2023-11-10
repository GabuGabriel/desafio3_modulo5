import React, { useContext, useState } from 'react';
import { PokeContexto } from '../Contexto/PokeContexto';
import { useNavigate } from 'react-router-dom';

export default function Pokemones() {
  const { setPokemon } = useContext(PokeContexto);
  const navigate = useNavigate();
  const [localPokemonName, setLocalPokemonName] = useState('');

  const handleInputChange = (event) => {
    setLocalPokemonName(event.target.value);
  };

  const handleVerPokemonClick = () => {
    const finalPokemonName = localPokemonName || '';
    setPokemon(finalPokemonName);
    navigate(`/Detalle/${finalPokemonName}`);
  };

  return (
    <div className="containerpokemones">
      <h1>Buscador de Pokemones</h1>
      <div className="divformulario">
        <form>
          <label>
            <h3>Selecciona un Pokemon</h3>
            <input type="text" value={localPokemonName} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleVerPokemonClick}>
            Ver Pokémon
          </button>
        </form>
      </div>
    </div>
  );
}
