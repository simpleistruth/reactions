import React from 'react'

const PokemonBox = () => {

    const [name, setName] = React.useState("")
    const [info, setInfo] = React.useState(null)


    const fetchPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .catch(err => console.log(err))

    console.log(fetchPokemon)

    return (
        <div className='pokemon-box'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => fetchPokemon()}>Search</button>
            {info && 
                <div>Found {name}</div>
            }
        </div>
    )
}

export default PokemonBox;