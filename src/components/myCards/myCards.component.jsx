import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AOS from 'aos';

import '../../styles.scss';
import './myCards.styles.scss';

AOS.init();

function MyCard() {
	return (
		<Container className='cards'>
			<Row>
				<Col className='col-12 col-md-6 col-lg-4'>
					<Card
						className='card mx-30'
						data-aos='zoom-in-right'
						data-aos-delay='25'
						data-aos-duration='1500'
						data-aos-easing='zoom-in-right'
					>
						<img
							src='https://placeimg.com/640/480/nature'
							className='card-img-top'
							alt='...'
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Card.Link href='#'>Card Link</Card.Link>
							<Card.Link href='#'>Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>

				<Col className='col-12 col-md-6 col-lg-4'>
					<Card
						className='card mx-30'
						data-aos='zoom-in-right'
						data-aos-delay='25'
						data-aos-duration='1500'
						data-aos-easing='zoom-in-right'
					>
						<img
							src='https://placeimg.com/640/480/nature'
							className='card-img-top'
							alt='...'
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Card.Link href='#'>Card Link</Card.Link>
							<Card.Link href='#'>Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>

				<Col className='col-12 col-md-6 col-lg-4'>
					<Card
						className='card mx-30'
						data-aos='zoom-in-right'
						data-aos-delay='25'
						data-aos-duration='1500'
						data-aos-easing='zoom-in-right'
					>
						<img
							src='https://placeimg.com/640/480/nature'
							className='card-img-top'
							alt='...'
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Card.Link href='#'>Card Link</Card.Link>
							<Card.Link href='#'>Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default MyCard;
