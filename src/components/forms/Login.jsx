import { useState } from "react"

export default function Login({ updateUser }) {
    
    const [ isLogging, setIsLogging ] = useState(false)
    const [user, setUser] = useState({ username: '', password: '', token: '' })

    if( isLogging ){
        loginUser()
    }

    async function loginUser(){
        const res = await fetch('http://127.0.0.1:5000/login',{
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok){
            const data = await res.json()
            updateUser({ token: data.token, username: user.username, password: user.password})
        }
        
        setIsLogging(false)
    }

    function handleSubmit(e){
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
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
