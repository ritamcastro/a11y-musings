import React from "react"
import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {

    return (
        <header className="page-header">
            <Link to="/">
                <img alt="Home" src="assets/images/mandala.png" height="42" width="42" />
                Home
            </Link>
        </header>
    )
}

export default Header