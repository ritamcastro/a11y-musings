import React, { useState } from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import InputsAndLabelsForOneField from "./inputs-and-labels/one-field/one-field"

const Home = () => {
    return (
        <ul>
            <li>
                <Link to="/inputs/one-field/" >Labels for "multiple" Inputs</Link>
            </li>
        </ul>
    )
}

const App = () => {
    return <BrowserRouter>
        <header class="page-header">
            <Link to="/">
                <img alt="Home" src="assets/images/mandala.png" height="42" width="42" />
                Home
            </Link>
        </header>

        <main>
            <Switch>
                <Route path="/inputs/one-field/" render={() => <InputsAndLabelsForOneField />} />
                <Route path="/" render={() => <Home />} />
            </Switch>
        </main>

        <footer>
            <p>Rita Castro | 2021</p>
        </footer>
    </BrowserRouter>
}

export default App
