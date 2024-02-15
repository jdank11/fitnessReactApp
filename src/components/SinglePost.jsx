
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import { useContext, useEffect } from 'react'

export default function SinglePost({ post }){
    console.log(post)

    const navigate = useNavigate()
    const {user} = useContext(UserContext)

    async function delPost( post_id ){
        const res = await fetch(`http://127.0.0.1:5000/post/${post_id}`,{
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
          }
          
        })
        if(res.ok){
          const data = await res.json()
          console.log(data)

          return
        }
        console.error('Delete Failed')
      }
      
    function deletePost(postid){
        delPost(postid)
        navigate('/')
    }


    return (
    <div className='postsbox'>  
        <h3></h3>
        <div>
            <div key={post.id} className='posts'>Workout:
                <ul>
                    <li>Exercise: {post.exercise}</li>
                    <li>Weight: {post.weight}</li>
                    <li>Reps: {post.reps}</li>
                    <li>Notes: {post.notes}</li>
                    
                </ul>
                
                <div className='postbtn'> 
                    <button id='delbtn' type='button' onClick={()=> {deletePost(post.id)}}>Delete</button>
                    <button id='favebtn' type='button' class='favorite-btn btn btn-outline-info text-danger'>♡</button>
                </div>
            </div>
        </div>
    </div> 
    )

} 
