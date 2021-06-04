import React, { useState } from "react"
import "./form-with-multiple-inputs.scss"

const UsingForInLabelAndAriaLabelledByInInput = () => {

    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")

    const [pokemons, setPokemnons] = useState([])

    const onSubmit = (event) => {
        event.preventDefault()
        setPokemnons([input, input2, input3])
    }

    return (
        <div className="multiple-inputs">
            <form className="form" onSubmit={onSubmit}>
                <label htmlFor="goodPokemons">Choose up to three Pokemons:</label>
                <input aria-labelledby="goodPokemons" placeholder="Bulbasar?" value={input} onChange={e => setInput(e.target.value)} />
                <input aria-labelledby="goodPokemons" placeholder="Charmander?" value={input2} onChange={e => setInput2(e.target.value)} />
                <input aria-labelledby="goodPokemons" placeholder="Squirtle?" value={input3} onChange={e => setInput3(e.target.value)} />
                <button>GO!</button>
            </form>

            <div className="results">
                <If condition={pokemons}>
                    {
                        pokemons.map((p, key) =>
                            <p key={key}>You are my favorite, {p}! </p>
                        )
                    }
                </If>
            </div>
        </div>
    )
}

export default UsingForInLabelAndAriaLabelledByInInput