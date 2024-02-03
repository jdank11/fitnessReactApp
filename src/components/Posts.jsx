import { useState } from "react"
import Post from "./SinglePost"
import Container from 'react-bootstrap/Container'

export const Posts= ()=> {

    const [ posts, setPosts ] = useState([])

    useState( ()=>{
        (async ()=>{
            const res = await fetch('http://127.0.0.1:5000/post')
            if(res.ok){
                const data = await res.json()
                setPosts(data);
                return
            }
            console.error('Failed to get posts')
        })()
    },[])

  return (
    <Container>
        { posts.length > 0 ? posts.map((post)=> {
            return <Post key={post.id} post= {post}/> 
        }) : <p>No posts to display</p> }
    </Container>    
  )
}
