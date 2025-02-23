
//work api https://pokeapi.co/api/v2/pokemon?limit=124
//github https://github.com/thapatechnical/pokemon_thapa_react/blob/master/src/Pokemon.jsx

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import PokemonDetails from "./PokemonDetails"

function Pokemon() {

    const [pokemon, setPokemon] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/minhazapon/pokemon--react.js-project/refs/heads/main/public/pokemon.json')
            .then(res => {
                setPokemon(res.data)
            })
    }, [])

    const searchData = pokemon.filter((pokemonData) =>
        pokemonData.name.toLowerCase().includes(search.toLowerCase())
    )



    return (
        <div className=" m-16 ">
            <div>
                <div className=" flex justify-center items-center gap-2">
                    <img className=" h-[30px]  md:h-[60px] " src="https://cdn-icons-png.flaticon.com/128/188/188970.png" alt="" />
                    <p className=" text-center  text-xl md:text-6xl text-black font-serif ">Pokemon Power</p>
                </div>
                <div>
                    <input className="w-full border-[1px] border-red-100 mt-5 h-[50px] rounded-lg p-3"
                        placeholder="Search Here"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        name="search"
                        id="" />
                </div>
                {/* /////////////////////// */}
                <div className=" flex justify-center mt-10">
                    <div className=" grid  md:grid-cols-4 gap-5 ">
                        {
                            searchData.map(pokemon => <PokemonDetails key={pokemon.id}
                                pokemon={pokemon} ></PokemonDetails>)
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Pokemon
