import { useState } from 'react'
import Container from 'react-bootstrap/Container'


import Header from "./components/Header"
import {Posts} from "./components/Posts"
import WorkoutPost from './components/forms/WorkoutPost'
import SinglePost from "./components/SinglePost"
import Body from "./components/Body"
import Exercise from "./components/Exercise"
import Register from "./components/forms/Register"
import Users from "./components/Users"
import SocialPage from './pages/SocialPage'
import FormPage from './pages/FormPage'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


export default function App(){

  const [user, setUser] = useState({ username: '', password: '', token: '', followed: '' })
  


  function updateUser({ username, password, token, followed }) {
    setUser({ username, password, token, followed})
  }


  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      
      
      <Routes>
        <Route path='/' element={<LandingPage>
          <Exercise/>
        </LandingPage>} />

        <Route path='/login' element={<FormPage>
          <Login user={user} updateUser={updateUser} />
        </FormPage>} />

        <Route path='/register' element={<FormPage>
          <Register />
        </FormPage>} />

        <Route path='/users' element={<SocialPage>
          <Users user={user} />
        </SocialPage>} />
        
        <Route path='/posts' element={<SocialPage>
           <WorkoutPost user={user}/> <Posts />
        </SocialPage>} />
        
        <Route path='/user/:username' element={<UserPage />} />

      </Routes>
      <ToastContainer />

    </Container>
  )

}

