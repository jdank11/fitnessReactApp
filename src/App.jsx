import Container from 'react-bootstrap/Container'


import Header from "./components/Header"
import {Posts} from "./components/Posts"
import Body from "./components/Body"
import Exercise from "./components/Exercise"
import Register from "./components/forms/Register"
import Workout from "./components/forms/Workout"
import Users from "./components/Users"
import SocialPage from './pages/SocialPage'
import FormPage from './pages/FormPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'


export default function App(){


  return (
  	<Container fluid data-bs-theme = 'dark' className='app'>
      <Header />

      <FormPage>
        <Login />
      </FormPage>

      

 	</Container> 
  )

}

