import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { excercises } from './Excercises'
import arrow from './svgs/arrow.svg'
import heart from './svgs/heart.svg'
import home from './svgs/home.svg'

import ending1 from "./imgs/end_screen/Ending1.jpg"
import ending2 from "./imgs/end_screen/Ending2.jpg"
import ending3 from "./imgs/end_screen/Ending3.jpg"

export default function Workout() {
  const gray = "#292929"
  const red = "#ff2828"
  const { id, difficulty } = useParams()
  console.log(id)
  console.log(difficulty)

  function hanhleNextExcercise() {
    if (testWorkout.length == excerciseCount + 1) {
      setWorkoutState("finished")
      return
    }
    setExcerciseCount(excerciseCount + 1)
    setWorkoutState("waiting")

  }
  function handlePreviousExcercise() {
    if (excerciseCount > 0)
      setExcerciseCount(excerciseCount - 1)
    setWorkoutState("waiting")
  }

  const InfoBar = styled.div`
    border-bottom: 3px solid ${gray};
  `
  const WorkoutBackground = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 6fr 1fr;
  `
  const Stats = styled.div`
  display:flex;
  `
  const StatsP = styled.p`
    margin: 0rem 1rem;
  `
  const Bottom = styled.div`
  border-top: 3px solid ${gray};
  display: flex;
  align-items: center;
  justify-content: center;
  `
  const StartButton = styled.button`
  background-color: ${red};
  border: none;
  color: white;
  border-radius: 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  `
  const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  `
  const List = styled.ul`
  list-style: none;
  padding: 0;
  overflow-y: scroll;
  margin: 0;
  `
  const Figure = styled.figure`
  width:150px;
  aspect-ratio: 1;
  margin: 0.5rem 1rem 0.5rem 0;
  overflow: hidden;
  border-radius: 1rem;
  `
  const Excercise = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem 1rem;
  border-bottom: 3px solid ${gray};
  `
  const ExcerciseCount = styled.p`
  color: ${red};
  `
  const testWorkout = [
    { id: 3, reps: 5, time: 0 },
    { id: 0, reps: 0, time: 5 },
    { id: 5, reps: 5, time: 0 },
    { id: 4, reps: 0, time: 10 }
  ]

  const [workoutState, setWorkoutState] = useState("introduction")
  const [excerciseState, setExcerciseState] = useState(1)
  const [excerciseCount, setExcerciseCount] = useState(1)
  const [excerciseTime, setExcerciseTime] = useState(0)
  const [excerciseReps, setExcerciseReps] = useState(0)

  const ProgressBar = styled.div`
  width: ${excerciseCount / testWorkout.length * 100}vw;
  background-color: ${red};
  border-right: ${100 - excerciseCount / testWorkout.length * 100}vw solid ${gray};
  transition: 0.5s;
`
  const WaitingBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1rem 6fr 1fr;
`
  const BackgroundImage = styled.div`
position: absolute;
z-index: -1;
filter: blur(5px) grayscale(.5) brightness(.5);
width: 100%;
height: 100%;
top: 0;
`
  const WaitingBackgroundCenter = styled.div`
position:relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
  const WaitingButton = styled.button`
background:none;
border: ${red} solid 2px;
text-transform: uppercase;
border-radius: 2rem;
padding:.5rem 1rem;
color: ${red};
margin: 1rem;
`
  const WaitingCenter = styled.div`
color: ${red};
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;
text-align: center;
`
  const Countdown = styled.p`
font-size: 3rem;
margin: 0;
color: ${red};
font-weight: 500;
`

  const ExcercisingBackground = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 1rem 2fr 1fr;
text-align: center;
`
  const ExcerciseImage = styled.img`
width: 100%;
max-width:500px;
object-fit: cover;
`
  const ExcerciseControlls = styled.div`
  text-align: center;
  `
  const Arrow = styled.img`
  margin:auto;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  `
  //Ending
  const endingImages = [ending1, ending2, ending3]
  const randomEnding = endingImages[Math.floor(Math.random() * endingImages.length)]
  const EndingBackground = styled.div`
  background:linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 19, 0.73)), url(${randomEnding});
  width:100vw;
  height:100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  `
  if (workoutState === "introduction")
    return (
      <WorkoutBackground>
        <InfoBar>
          <h2>{"Nadpis"}</h2>
          <p>{"Lorem ipsum..."}</p>
          <Stats>
            <StatsP>{5} cviků</StatsP>
            <StatsP>{5} minut</StatsP>
          </Stats>
        </InfoBar>
        <List>
          {testWorkout.map((workout, i) => {
            const excercise = excercises.find(excercises => excercises.id === workout.id)
            return (
              <Excercise key={i}>
                <Figure>
                  <Image src={excercise.url} alt={excercise.name} />
                </Figure>
                <div>
                  <h3>{excercise.name}</h3>
                  <ExcerciseCount>{workout.reps !== 0 ? `${workout.reps}x` : `${workout.time} s`}</ExcerciseCount>
                </div>
              </Excercise>
            )
          })}

        </List>
        <Bottom>
          <StartButton onClick={() => setWorkoutState("waiting")}>Začít</StartButton>
        </Bottom>
      </WorkoutBackground>
    )

  if (workoutState === "waiting") {
    const excercise = excercises.find(excercises => excercises.id === testWorkout[excerciseCount].id)
    return (
      <WaitingBackground>
        <ProgressBar />
        <WaitingBackgroundCenter>
          <h2>Připravit</h2>
          <BackgroundImage>
            <Image src={excercise.url} alt={excercise.name} />
          </BackgroundImage>
          <WaitingCenter>
            <WaitingButton>+20s</WaitingButton>
            <Countdown>{"00:20"}</Countdown>
            <WaitingButton onClick={() => setWorkoutState("excercising")} >Přeskočit</WaitingButton>
          </WaitingCenter>
        </WaitingBackgroundCenter>
        <div>
          <p>Další cvik {excerciseCount}/{testWorkout.length}</p>
          <h2>{excercise.name}</h2>
          <ExcerciseCount>{testWorkout[excerciseCount].reps !== 0 ? `${testWorkout[excerciseCount].reps} x` : `${testWorkout[excerciseCount].time} s`}</ExcerciseCount>
        </div>
      </WaitingBackground>
    )
  }
  if (workoutState === "excercising") {
    const excercise = excercises.find(excercises => excercises.id === testWorkout[excerciseCount].id)
    return (
      <ExcercisingBackground>
        <ProgressBar />
        <figure>
          <ExcerciseImage src={excercise.url} alt={excercise.name} />
        </figure>
        <ExcerciseControlls>
          <h2>{excercise.name}</h2>
          <WaitingCenter>
            <Arrow onClick={handlePreviousExcercise} src={arrow} alt="arrow" />
            <Countdown>{"00:20"}</Countdown>
            <Arrow onClick={hanhleNextExcercise} style={{ transform: "rotate(180deg)" }} src={arrow} alt="arrow" />
          </WaitingCenter>
        </ExcerciseControlls>
      </ExcercisingBackground>
    )
  }
  if (workoutState === "finished") {
    return (
      <EndingBackground>
        <h2>Gratulace</h2>
        <p>Workout Vám trval {"5:01 minut"}</p>
        <p>Vrátit se domů <Link to="/"><img src={home} alt="home" /></Link></p>
        <p>Líbil se Vám workout?</p>
        <img src={heart} alt="heart" />

      </EndingBackground>
    )
  }
}
