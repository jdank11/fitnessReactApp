import { useContext, useRef } from 'react'
import { UserContext } from "../../contexts/UserContext"

export default function Post() {

    const { user } = useContext(UserContext)
    const workoutNameRef = useRef(null)
    const weightRef = useRef(null)
    const repsRef = useRef(null)
    const notesRef = useRef(null)
    
    async function sendPost( postData ){
      console.log(postData)
      console.log(user)
      const res = await fetch('http://127.0.0.1:5000/post',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify(postData)
        
      })
      if(res.ok){
        const data = await res.json()
        console.log(data)
        return
      }
      console.error('Post Failed')
    }

    function handleSubmit(e){
        e.preventDefault()
        window.location.reload()
        console.log(workoutNameRef, weightRef, repsRef, notesRef)
        const postData = {exercise: workoutNameRef.current.value , weight: weightRef.current.value, reps: repsRef.current.value, notes: notesRef.current.value}
        
        sendPost(postData)
    }

  return (
    <div className='workoutpost'>
        <h3>Log Workout</h3>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="exercise">Exercise</label><br />
            <input type="text" name='workoutName' ref={workoutNameRef} /><br />
            <label htmlFor="weight">Weight</label><br />
            <input type="text" name='workoutWeight' ref={weightRef} /><br />
            <label htmlFor="reps">Reps</label><br />
            <input type="text" name='workoutReps' ref={repsRef} /><br />
            <label htmlFor="notes">Notes</label><br />
            <input type="text" name='notes' ref={notesRef} /><br />
            <input type="submit" value='Post'/>
        </form>
    </div>
  )
}




