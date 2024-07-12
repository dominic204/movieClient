import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserContext from "../UserContext";
import { Link, NavLink } from 'react-router-dom';

export default function AppNavbar() {

	const { user } = useContext(UserContext);

	return(
		<Navbar bg="primary" expand="lg">
			<Container fluid>
			    <Navbar.Brand as={Link} to="/">Fitness Tracker</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ms-auto">
				        <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
				        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
						{
							user.id !== null ? 
								<>
									<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
								</>
								: 		
								<>
									<Nav.Link as={Link} to="/login">Login</Nav.Link>
									<Nav.Link as={Link} to="/register">Register</Nav.Link>
								</>
                        }
				    </Nav>
			    </Navbar.Collapse>
			</Container>
		</Navbar>
		)
}