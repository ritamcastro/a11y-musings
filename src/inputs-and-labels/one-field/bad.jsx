import React, { useState } from "react"

const Bad = ({ showPokemon }) => {

    const [input, setInput] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        showPokemon(input)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="badPokemons">Choose your Pokemon:</label>
            <input aria-labelledby="badPokemons" placeholder="Bulbasar?" value={input} onChange={e => setInput(e.target.value)} />
            <input aria-labelledby="badPokemons" placeholder="Charmander?" value={input} onChange={e => setInput(e.target.value)} />
            <input aria-labelledby="badPokemons" placeholder="Squirtle?" value={input} onChange={e => setInput(e.target.value)} />
            <button>GO!</button>
        </form>
    )
}

export default Bad
