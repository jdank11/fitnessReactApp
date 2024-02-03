import { useState } from 'react'

import Container from 'react-bootstrap/Container'

export default function Exercise() {
    
    const [ performingExercise, setPerformingExercise ] = useState('')

    const exercises = [
        'curls',
        'bench',
        'squat',
        'pull-ups',
        'deadlift',
        'rows',
        'lunges', 
        'crunches'
    ]
    
    function randomExercise(){
        setPerformingExercise( exercises[Math.floor(Math.random() * exercises.length)] )
    }

  return (
    <Container id='exercise'>
        <h1>Mindset is Everything</h1>
        <h3>Exercise of the Day</h3>
        <p>Exercise: {performingExercise}</p>
        <button id='spinthewheel' onClick={randomExercise}>Spin The Wheel</button>
    </Container>
  )

}