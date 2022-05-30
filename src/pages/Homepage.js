import React, {useEffect, useState} from 'react';
import pokemonLogo from "../assets/Pokemon-Logo.png";
import PokemonCard from "../component/PokemonCard";
import styles from "../pages/Homepage.css"
import axios from "axios";

function Homepage() {

    const [pokemon, setPokemon] = useState([])
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        async function getPokemonData() {

            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data);
                setPokemon(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        getPokemonData()
    }, [endpoint])





    return (
        <div>
            <header><img src={pokemonLogo} alt="pokemonlogo" width="50%"/></header>
            <section className={styles.buttonsArea}>
            <button id="button-back"
                type="button"
                onClick={() => setEndpoint(pokemon.previous)}
            >
                Vorige
            </button>
            <button
                id="button-forward"
                type="button"
                onClick={() => setEndpoint(pokemon.next)}
            >
                Volgende
            </button>
            </section>
            <main>
            {pokemon.results && pokemon.results.map((poke) => {
                return <PokemonCard url={poke.url} key={poke.name}/>
            })}
            </main>
        </div>
    );
}

export default Homepage;