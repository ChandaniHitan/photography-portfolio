import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';


export default class NavbarComponent extends React.Component {
render() {
	return(
	<div>
	<Navbar  collapseOnSelect  expand='sm' bg='light' varient='dark'>
		<Container>
		<Navbar.Brand href="#home">LUCID|PHOTOGRAPHY</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav>
					<Nav.Link href='/'>
						Home
					</Nav.Link>
		       		<Nav.Link href='/about'>
						About
					</Nav.Link>
					<Nav.Link href='/portfolio'>
						Portfolio
					</Nav.Link>
					<Nav.Link href='/contact'>
						Contact
					</Nav.Link>
					<Nav.Link href='/services'>
						Services
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		
		</Container>

		
		
	</Navbar>
	</div>
)
}
}


