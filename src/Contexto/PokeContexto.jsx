import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PokeContexto = createContext()

export const Provider = ({ children }) => {
  const [options, setOptions] = useState({})
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState({})
  const [pokemonStats, setPokemonStats] = useState([])
  const navigate = useNavigate()
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const getPokemones = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    const opts = data.results.map((d) => d.name)
    setOptions(opts)
  }

  const getPokemon = async (pokeName) => {
    const resp = await fetch(`${url}${pokeName}`)
    const data = await resp.json()
    const img = data.sprites.front_default
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat
    }))
    const types = data.types.map(({ type }) => type.name).join(' - ')
    setPokemon({ img, types })
    setPokemonStats((state) => {
      state = [...state, stats]
      return state
    })
  }

  const verPokemon = async () => {
    if (pokemonName) {
      await getPokemon(pokemonName)
      navigate(`/Pokemones/${pokemonName}`)
    } else {
      alert('No se ha seleccionado ningún Pokémon o no se encontraron detalles.')
    }
  }

  useEffect(() => {
    return () => {
      getPokemones()
    }
  }, [])

  const globalState = {
    options,
    setOptions,
    pokemonName,
    setPokemonName,
    verPokemon,
    pokemon,
    setPokemon,
    pokemonStats
  }
  return (
    <PokeContexto.Provider value={globalState}>{children}</PokeContexto.Provider>
  )
}
