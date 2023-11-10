import React, { createContext, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const PokeContexto = createContext()

export const Provider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const navigate = useNavigate()

  const setPokemon = useCallback((pokemon) => {
    setSelectedPokemon(pokemon)
  }, [])

  const globalState = {
    selectedPokemon,
    setPokemon,
    navigate,
    apiUrl: 'https://pokeapi.co/api/v2/pokemon/'
  }

  return <PokeContexto.Provider value={globalState}>{children}</PokeContexto.Provider>
}
