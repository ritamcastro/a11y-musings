import React, { useState } from "react"

const Good = ({ showPokemon }) => {

    const [input, setInput] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        showPokemon(input)
    }

    return (
        <form onSubmit={onSubmit}>
            <label id="goodPokemons">Choose your Pokemon:</label>
            <input aria-labelledby="goodPokemons" placeholder="Bulbasar?" value={input} onChange={e => setInput(e.target.value)} />
            <input aria-labelledby="goodPokemons" placeholder="Charmander?" value={input} onChange={e => setInput(e.target.value)} />
            <input aria-labelledby="goodPokemons" placeholder="Squirtle?" value={input} onChange={e => setInput(e.target.value)} />
            <button>GO!</button>
        </form>
    )
}



export default Good