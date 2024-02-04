import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { UserContext } from "../../contexts/UserContext"



export default function Login() {
    
    const [ isLogging, setIsLogging ] = useState(false)
    const [user, setUser] = useState({ username: '', password: '', token: '' })
    
    const { updateUser, user: userState, updateLocalStorage } = useContext(UserContext)
    const navigate = useNavigate()

    if( isLogging ){
        loginUser()
    }

    useEffect(() => {
        if (userState.username) {
            updateUserLocalStorage()
            navigate('/')
            return
        }
    }, [updateUser])


    async function getUser(username){
        const res = await fetch('http://127.0.0.1:5000/user/'.concat(username))
        if(res.ok){
            const data = await res.json()
            return data
        }
    }


    async function loginUser(){
        const res = await fetch('http://127.0.0.1:5000/login',{
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok){
            const data = await res.json()
            console.log(data, 'from login')
            if(data.token){
                toast.success(user.username.concat(' logged In!'))
                const userData = await getUser(user.username)
                updateUser({ token: data.token, username: user.username, followed: userData.followed})
                navigate('/')
                return
            }
        }
        toast.error('Invalid Login, Try again')
        console.error('Login Failed')
        setIsLogging(false)
    }

    function handleSubmit(e){
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }

    return (
        <>
            <h3>Login</h3>
            <form action="" id='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br />
                <input type="text" name='username'/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name={'password'} /><br />
                <input type="submit" value={'Login'} />
            </form>
        </>
    )
}
