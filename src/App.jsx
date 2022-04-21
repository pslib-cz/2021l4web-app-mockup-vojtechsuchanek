import { useState } from 'react'
import './App.css'
import { Route, Link, Routes } from "react-router-dom";
import styled from 'styled-components'

//Pages
import Workout from './Workout'
import Home from './Home'

const Main = styled.div`
`

function App() {

  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Workout/:id/:difficulty' element={<Workout />} />
      </Routes>
    </Main>
  )
}

export default App
