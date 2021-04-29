import React, { useState } from "react"

const Good = ({ showPokemon }) => {

    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        showPokemon([input, input2, input3])
    }

    return (
        <form onSubmit={onSubmit}>
            <label id="goodPokemons">Choose your Pokemon:</label>
            <input aria-labelledby="goodPokemons" placeholder="Bulbasar?" value={input} onChange={e => setInput(e.target.value)} />
            <input aria-labelledby="goodPokemons" placeholder="Charmander?" value={input2} onChange={e => setInput2(e.target.value)} />
            <input aria-labelledby="goodPokemons" placeholder="Squirtle?" value={input3} onChange={e => setInput3(e.target.value)} />
            <button>GO!</button>
        </form>
    )
}



export default Good