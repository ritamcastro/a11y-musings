import React, { useState } from "react"
import Bad from "./bad"
import Good from "./good"


const InputsAndLabelsForOneField = () => {
    const [pokemon, setPokemon] = useState(undefined)

    return (
        <div>

            <div>
                <h4>Good and Accessible Pokemons!</h4>
                <Good showPokemon={setPokemon} />
                <If condition={pokemon}>
                    {
                        pokemon.map(p =>
                            <p>I choose you, {p}! </p>
                        )
                    }
                </If>
            </div>

            <div>
                <h4>Not so Accessible Pokemons!</h4>
                <Bad showPokemon={setPokemon} />

                <If condition={pokemon}>
                    {
                        pokemon.map(p =>
                            <p>I choose you, {p}! </p>
                        )
                    }
                </If>
            </div>


            {/* <div>
                <h4>Only One Accessible Pokemons!</h4>
                <Meh showPokemon={setPokemon} />
                <If condition={pokemon}>
                    {
                        pokemon.map(p =>
                            <p>I choose you, {p}! </p>
                        )
                    }                </If>
            </div> */}

            {/* // TODO: add label with children */}
        </div>
    )
}

export default InputsAndLabelsForOneField