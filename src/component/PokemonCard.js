import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "../component/PokemonCard.css"

const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function getPokemonData() {

            try {
                const result = await axios.get( `${url}`);
                console.log(result.data);
                setPokemon(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        getPokemonData()
    }, [])

    return (
        <section className="pokemon-section">
        <div id="pokemon-card">
            {Object.keys(pokemon).length > 0 &&
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt="pokemon image"/>
                    <h3>{"Moves: " + pokemon.moves.length}</h3>
                    <h3>{"Weigth:" + pokemon.weight}</h3>
                    <h3>Abilities:</h3>
                    <ul>
                        {pokemon.abilities.map((ability, index) => {
                                return <li key={index}>{ability.ability.name}</li>})}
                    </ul>

                </>
            }
        </div>
        </section>
    );
};

export default PokemonCard;