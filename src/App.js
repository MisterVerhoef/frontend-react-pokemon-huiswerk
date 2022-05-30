import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonCard from "./component/PokemonCard";
import pokemonLogo from "../src/assets/Pokemon-Logo.png"
import './App.css';
import Homepage from "./pages/Homepage";



function App() {

    // const [pokemon, setPokemon] = useState([])
    // const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`)
    //
    // useEffect(() => {
    //     async function getPokemonData() {
    //
    //         try {
    //             const result = await axios.get(`${endpoint}`);
    //             console.log(result.data);
    //             setPokemon(result.data);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     getPokemonData()
    // }, [endpoint])


  return (



    <>
        <Homepage/>
    </>

  );
}

export default App;
