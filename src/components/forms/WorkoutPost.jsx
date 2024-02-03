import { useRef } from 'react'

export default function Post( { user }) {

    const postInputRef = useRef(null)
    
    async function sendPost( postData ){
      const res = await fetch('http://127.0.0.1:5000/post',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({body: postData})
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
        console.log(postInputRef.current.value)
        const postData = postInputRef.current.value
        sendPost(postData)
    }

  return (
    <div id='workoutpost'>
        <h3>Log Workout</h3>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Exercise</label><br />
            <input type="text" name='workoutName' ref={postInputRef} /><br />
            <label htmlFor="workout">Weight</label><br />
            <input type="text" name='workoutWeight' ref={postInputRef} /><br />
            <label htmlFor="weight">Reps</label><br />
            <input type="text" name='workoutReps' ref={postInputRef} /><br />
            <input type="submit" value='Post'/>
        </form>
    </div>
  )
}




