
import Container from 'react-bootstrap/Container'


import Header from "./components/Header"
import {Posts} from "./components/Posts"
import WorkoutPost from './components/forms/WorkoutPost'
import Exercise from "./components/Exercise"
import QOTD from "./components/QOTD"
import Register from "./components/forms/Register"
import Users from "./components/Users"
import SocialPage from './pages/SocialPage'
import FormPage from './pages/FormPage'
import LandingPage from './pages/LandingPage'
import UserPage from './pages/UserPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Logout from './components/Logout'



export default function App(){


  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header  />
      
      <Routes>
        <Route path='/' element={<LandingPage>
          <QOTD/>
        </LandingPage>} />

        <Route path='/login' element={<FormPage>
          <Login />
        </FormPage>} />

        <Route path='/register' element={<FormPage>
          <Register />
        </FormPage>} />

        <Route path='/users' element={<SocialPage>
          <Users />
        </SocialPage>} />
        
        <Route path='/posts' 
          element={
            <SocialPage>
              
              <div className='socialpage'>
                <WorkoutPost />
                <Posts />
              </div>  
            </SocialPage>} />
        
        <Route path='/user/:username' element={<UserPage />} />
        <Route path='logout' element={<Logout/>} />

      </Routes>
      <ToastContainer />

    </Container>
  )

}

