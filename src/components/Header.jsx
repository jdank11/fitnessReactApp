import  Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand name="title" as={NavLink} to="/">Swole Mate</Navbar.Brand>
                <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                <Link to='/login'>Login</Link>
                <Nav.Link as={NavLink} to='/users'>Users</Nav.Link>
                <Nav.Link as={NavLink} to='/posts'>Posts</Nav.Link>
            </Container>
        </Navbar>

    )
}


