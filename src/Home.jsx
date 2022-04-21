import React from 'react'
import styled from 'styled-components'
import css from "./Home.css"
import { Link } from 'react-router-dom'

import bricho from "./imgs/links/bricho.jpg"
import nohy from "./imgs/links/nohy.jpg"
import prsa from "./imgs/links/prsa.jpg"
import ruce from "./imgs/links/ruce.jpg"
import logo from "./svgs/logo.svg"

export default function Home() {

    const images = [bricho, nohy, prsa, ruce]
    const ids = ["bricho", "nohy", "prsa", "ruce"]
    const difficulties = ["easy", "medium", "hard"]
    function CreateList() {
        let list = []
        for (let i = 0; i < difficulties.length; i++) {
            for (let j = 0; j < ids.length; j++) {
                console.log(images[j])
                list.push(
                    <Link key={i + "" + j} to={`/workout/${ids[j]}/${difficulties[i]}`} className='link'>
                        <div style={{ backgroundImage: `url(${images[j]})` }} className='link__container'>
                            <h3>{ids[j]}</h3>
                            <p>{difficulties[i]}</p>
                        </div>
                    </Link>
                )
            }
        }
        return list
    }

    return (
        <>
            <h1>
                <figure className='logo__container'>
                    <img className='logo' src={logo} alt="Workout Aplikace" />
                </figure>
            </h1>
            <ul className='link__list'>
                {difficulties.map((difficulty, i) => {
                    return (
                        <li key={i}>
                            <h3 className='link__heading'>{difficulty}</h3>
                            <ul className='link__list'>
                                {ids.map((id, j) => {
                                    return (
                                        <li key={j}>
                                            <Link to={`/workout/${id}/${difficulty}`} className='link'>
                                                <div style={{ backgroundImage: `url(${images[j]})` }} className='link__container'>
                                                    <h3>{id}</h3>
                                                    <p>{difficulty}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
