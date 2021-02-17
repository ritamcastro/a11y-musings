import React, { useState } from "react"

const Meh = ({ showPokemon }) => {

    const [input, setInput] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        showPokemon(input)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="mehPokemons">Choose your Pokemon:</label>
            <input id="mehPokemons" placeholder="Bulbasar?" value={input} onChange={e => setInput(e.target.value)} />
            <input id="mehPokemons" placeholder="Charmander?" value={input} onChange={e => setInput(e.target.value)} />
            <input id="mehPokemons" placeholder="Squirtle?" value={input} onChange={e => setInput(e.target.value)} />
            <button>GO!</button>
        </form>
    )
}

export default Meh