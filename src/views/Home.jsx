import '../App.css'
import pokemon6 from '../assets/images/pokemon-6.svg'
import pokemon23 from '../assets/images/pokemon-23.svg'

export default function Home () {
  return (
    <div className='containerHome'>
      <h1>Vienbenido al buscador de Pokemones</h1>
      <div className='containerimageneshome'>
        <img src={pokemon23} alt='foto1' width={700} height={250} />
        <img src={pokemon6} alt='foto1' width={250} height={250} />
      </div>
    </div>
  )
}
