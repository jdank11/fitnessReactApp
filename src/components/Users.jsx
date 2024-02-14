import { useEffect, useState, useContext } from "react"
import Spinner from 'react-bootstrap/Spinner'
import { UserContext } from "../contexts/UserContext"
import { Container } from "react-bootstrap"


export default function Users() {

    const { user: loggedUser } = useContext(UserContext)
    
    const [ users, setUser ] = useState([])
    
    useEffect(()=>{
        (async () => {
            const res = await fetch('http://127.0.0.1:5000/user')
            if(res.ok){
                const data = await res.json()
                
                setUser(data)
            } else console.log('error');
        })()
    }, [])
    
    if(users.length === 0){
        return <Spinner />
    }
    
    async function followUser(followerId){
        const res = await fetch(`http://127.0.0.1:5000/user/follow/${followerId}`,{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer `.concat(loggedUser.token)
            }
        })
        if(res.ok){
            const data = await res.json()
            console.log(data)
            
        }
        
       
    }

    async function unfollowUser(followerId){
        const res = await fetch(`http://127.0.0.1:5000/user/follow/${followerId}`,{
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer `.concat(loggedUser.token)
            }
        })
        if(res.ok){
            const data = await res.json()
            console.log(data)
            
        }
        
        
    }

    

    return (
    <div className="users" >

        { users.map(user => {
            if (user.username !== loggedUser.username){
            return <div className='usersbox' key={user.id}>
                    <p> {user.username}</p>
                    
                
                    { loggedUser.followed.hasOwnProperty(user.id) ?
                    <button className='unfollowbutton' onClick={()=> unfollowUser(user.id)}>Unfollow</button> :
                    <button className='followbutton' onClick={()=> followUser(user.id)}>Follow</button>
                    }
                    
    
                    
                </div>
            }    
        })}
    </div>
  )
}      
