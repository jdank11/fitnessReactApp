import Post from "./Post"
import Container from 'react-bootstrap/Container'

export const Posts= ()=> {

    const posts = [
        {
            "body": "Post 1",
            "id": "1",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
                "email": "jdo1@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "jdo1"
            }
        },
        {
            "body": "Post 2",
            "id": "2",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
                "email": "jdo2@gmail.com",
                "first_name": null,
                "id": "2",
                "last_name": null,
                "username": "jdo2"
            }
        },
        {
            "body": "Post 3",
            "id": "3",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
                "email": "jdo3@gmail.com",
                "first_name": null,
                "id": "3",
                "last_name": null,
                "username": "jdo3"
            }
        },
        {
            "body": "Post 4",
            "id": "4",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
                "email": "jdo4@gmail.com",
                "first_name": null,
                "id": "4",
                "last_name": null,
                "username": "jdo4"
            }
    
        }
    ]

  return (
    <Container>
        { posts.length > 0 ? posts.map((post)=> {
            return <Post key={post.id} post= {post}/> 
        }) : <p>No posts to display</p> }
    </Container>    
  )
}
