import Body from "../components/Body"
import QOTD from "../components/QOTD"
import SearchExercises from "../components/SearchExercises"
import Exercise from "../components/Exercise"
import React, { useEffect, useState } from 'react'

export default function LandingPage() {

  const[ exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('All Body Parts:')

  return (
    <Body >
        
        <QOTD />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart = {setBodyPart}/>
        <Exercise setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>

    </Body>
  )
}
