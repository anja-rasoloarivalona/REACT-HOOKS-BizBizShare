import React from 'react'
import Button from '../Button/Button'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <Button exact link="/">
                    Home
                </Button>
                <Button link="/names">
                    Names
                </Button>
                <Button link="/animals">
                    Animals
                </Button>
            </ul>
        </nav>
    )
}

export default Navigation
