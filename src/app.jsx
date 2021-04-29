import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import InputsAndLabelsForOneField from "./inputs-and-labels/one-field/one-field"
import "./app.scss"
import Header from "./ui/molecules/header/header"
import Footer from "./ui/molecules/footer/footer"

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
        <Header />

        <main>
            <Switch>
                <Route path="/inputs/one-field/" render={() => <InputsAndLabelsForOneField />} />
                <Route path="/" render={() => <Home />} />
            </Switch>
        </main>

        <Footer />

    </BrowserRouter>
}

export default App
