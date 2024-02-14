import  Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Stack } from '@mui/material'

import lionsden from "../assets/lionsden.png"

export default function Header(){

    const { user } = useContext(UserContext)

    return(
        <Stack className="header" direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { md: '380px', sm: '30px' }, mb:"50px", justifyContent: 'none' }} px="10px">
            <Link>
                <img src={lionsden} alt="lionsdenlogo" style={{ width: '150px', height: '150px'}} />
            </Link>
            <Stack
                display= "flex"
                direction="row"
                gap="30px"
                fontSize="24px"
                alignItems="flex-end"
                
            >
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid orange' }}>Home</Link>
                
                <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>

                <Nav.Link as={NavLink} to='/users'>Users</Nav.Link>
                <Nav.Link as={NavLink} to='/posts'>My Workouts</Nav.Link>

                { user.username ? 
                <Link to='/logout'>Logout</Link> :
                <>
                <Link to='/login'>Login</Link>
                <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                </>
                }
                
            </Stack>
        </Stack>


  )

}


