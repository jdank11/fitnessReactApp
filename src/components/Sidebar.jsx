import  Navbar from "react-bootstrap/Navbar"
import  Nav from "react-bootstrap/Nav"
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Stack } from '@mui/material'

import lionsden from "../assets/lionsden.png"

export default function Sidebar() {

  const { user } = useContext(UserContext)

//   return (
//     //  <Navbar sticky='top' className = 'flex-column sidebar'>
//     //     <Nav.Item>
//     //         <Nav.Link as={NavLink} to="/posts">Feed</Nav.Link>
//     //     </Nav.Item>
//     //     <Nav.Item>
//     //         <Nav.Link as={NavLink} to={'/user/'.concat(user.username)}>My Page</Nav.Link>
//     //     </Nav.Item>
//     //     <Nav.Item>
//     //         <Nav.Link as={NavLink} to="/">Workout history</Nav.Link>
//     //     </Nav.Item>
            
//     // </Navbar>
//   )  
}
