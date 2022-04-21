import React from 'react'
import nav from "./Nav.css"

export default function Nav() {
    return (
        <nav className='nav'>
            <div className='nav__container'>
                <div className='nav__icon'>
                    <h1><a href='./'>Workout</a></h1>
                </div>
                <ul className='nav__list'>
                    <li><a href='./Profile'>Profile</a></li>
                    <li><a href='./Workout'>Workout</a></li>
                </ul>
            </div>
        </nav>
    )
}
