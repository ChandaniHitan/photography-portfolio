import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import styled from 'styled-components';

function NavbarComponent() {
	return(
	<div>
	<Wrapper>
		<Navbar collapseOnSelect  expand='sm' sticky='top' fixed='top'>
		<Container>
		<Navbar.Brand href="/"><Lucid>Lucid Thinkers</Lucid> <Span>PHOTOGRAPHY</Span></Navbar.Brand>
			<RightContent>
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
					</Nav>
			</Navbar.Collapse>
			</RightContent>	
		</Container>	
		</Navbar>
	</Wrapper>	
	</div>
)
}

const Wrapper = styled.div`
	margin-bottom: 20px;
`
const RightContent = styled.div`
	display: flex;
	align-item: right;
	font-size: 20px;
	font-family: serif;
`
const Lucid = styled.div`
	font-family: fantasy;
	color: white;
	font-size: 30px;
	letter-spacing: -2px;
`
const Span = styled.span`
	letter-spacing: 3px;
`

export default NavbarComponent;