import React, { useState } from "react"

const Meh = ({ showPokemon }) => {

    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        showPokemon([input, input2, input3])
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="mehPokemons">Choose your Pokemon:</label>
            <input id="mehPokemons" placeholder="Bulbasar?" value={input} onChange={e => setInput(e.target.value)} />
            <input id="mehPokemons" placeholder="Charmander?" value={input2} onChange={e => setInput2(e.target.value)} />
            <input id="mehPokemons" placeholder="Squirtle?" value={input3} onChange={e => setInput3(e.target.value)} />
            <button>GO!</button>
        </form>
    )
}

export default Meh