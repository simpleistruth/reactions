import React from 'react';
import PokemonBox from './pokemonBox'
import '../../styles/pokemon.css'

const Pokemon = () => {
    return (
        <div>
            <h1>Pokemons</h1>
            <span>Type name of pokemon in the input box below and information about the pokemon will be fetched</span>
            <PokemonBox />
        </div>
    )
}

export default Pokemon;