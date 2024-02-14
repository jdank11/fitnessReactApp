import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"

export default function UserPage() {

    const [user, setUser] = useState(null)

    const {username} = useParams()
    console.log(username, 'params')

    useEffect(()=>{
        (async ()=> {
            const res = await fetch('http://127.0.0.1:5000/user/'.concat(username))
            if(res.ok){
                const data = await res.json()
                console.log(data)
                const {username, posts} = data
                setUser({username, posts})
            }
        })()
    }, [])

    if(!user) return <Spinner/>

  return (
    <div className="userspage">
        <h2 className='userheader'>{user.username}</h2>
        {user.posts.map( (post)=> {
            return <p key={post.id} className="userspost">Workout:
                        
                        <li>Exercise: {post.exercise}</li>
                        <li>Weight: {post.weight}</li>
                        <li>Reps: {post.reps}</li>
                        <li>Notes: {post.notes}</li>
                        
                    </p>
        })}

    </div>
  )
}
