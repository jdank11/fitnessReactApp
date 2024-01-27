import { useState } from "react"

export default function Workout() {

    const [workout, setWorkout] = useState({ workoutName: '', weight: '', reps: '' })
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(workout, 'form submitted');
        setWorkout({workoutName: '', weight: '', reps: ''})
    }

    return (
        <>
            <h3>Workout Log</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="workoutName">Workout</label><br />
                <input type="text" name='workoutName' value={workout.workoutName} onChange={(e) => setWorkout({ ...user, workoutName: e.target.value })} /><br />
                <label htmlFor="weight">Weight</label><br />
                <input type="weight" name='weight' value={workout.weight} onChange={(e)=> setWorkout({...user, weight: e.target.value})}/><br />
                <label htmlFor="reps">Reps</label><br />
                <input type="reps" name='reps' value={workout.reps} onChange={(e)=> setWorkout({...user, reps: e.target.value})}/><br />
                <input type="Submit" />
            </form>
        </>
    )

}