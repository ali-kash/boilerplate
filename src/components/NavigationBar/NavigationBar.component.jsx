import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './NavigationBar.styles.scss';

import { BsBuilding } from 'react-icons/bs';

function NavigationBar() {
	return (
		<Navbar bg='dark' expand='lg'>
			<Container>
				<Navbar.Brand href='#/'>
					<div className='logo'>
						<BsBuilding />
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#/cards'>Cards</Nav.Link>
						<Nav.Link href='#/contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
