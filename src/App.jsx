import Container from 'react-bootstrap/Container'


import Header from "./components/Header"
import {Posts} from "./components/Posts"
import Body from "./components/Body"
import Exercise from "./components/Exercise"
import Register from "./components/forms/Register"
import Workout from "./components/forms/Workout"


export default function App(){


  return (
  	<Container fluid data-bs-theme = 'dark' className='app'>
      <Header />
      <Body>
        <Posts/>
        <Exercise/>
      
        <Register/>
        <Workout/>
      </Body>

 	</Container> 
  )

}
