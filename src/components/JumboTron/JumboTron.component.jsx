import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './JumboTron.styles.scss';

function JumboTron() {
	return (
		<Jumbotron fluid>
			<Container>
				<h1>Welcome to the home page</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<p>
					<Button variant='primary'>Learn more</Button>
				</p>
			</Container>
		</Jumbotron>
	);
}

export default JumboTron;
