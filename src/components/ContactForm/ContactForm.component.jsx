import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import '../../styles.scss';
import './ContactForm.styles.scss';

function ContactFrom() {
	return (
		<Container className='contact-form'>
			<div className='row'>
				<div className='col-md-7 col-md-offset-2'>
					<Form className='form'>
						<Form.Group controlId='nameNine'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter your name'
								className='form-control'
								required=''
								placeholder='Your Name'
							/>
						</Form.Group>
						<Form.Group controlId='emailNine'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='email'
								placeholder='Email'
								className='form-control'
								required=''
								placeholder='Email'
							/>
						</Form.Group>
						<Form.Group controlId='messageNine'>
							<Form.Label>Leave a message</Form.Label>
							<Form.Control
								as='textarea'
								className='form-control'
								required=''
								rows='4'
								placeholder='Write a message'
							/>
						</Form.Group>
						<Button
							variant='primary'
							type='submit'
							className='btn text-center btn-blue'
						>
							Send Message
						</Button>
					</Form>
				</div>
			</div>
		</Container>
	);
}

export default ContactFrom;
