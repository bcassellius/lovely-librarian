import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
	// set modal display state
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Navbar bg='info' variant='dark' expand='lg'>
				<Container fluid>
					<Navbar.Brand as={Link} to='/' c>
						Lovely Librarian
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbar' />
					<Navbar.Collapse id='navbar'>
						<Nav className='ml-auto'>
							<Nav.Link as={Link} to='/'>
								Search For Books
							</Nav.Link>
							{/* if user is logged in show saved books and logout */}
							{Auth.loggedIn() ? (
								<>
									<Nav.Link as={Link} to='/calendar'>
										View Calendar
									</Nav.Link>
									<Nav.Link as={Link} to='/staff'>
										Staff Directory
									</Nav.Link>
									<Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
								</>
							) : (
								<Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* set modal data up */}
			<Modal
				size='lg'
				show={showModal}
				onHide={() => setShowModal(false)}
				aria-labelledby='signup-modal'
			>
				{/* tab container to do either signup or login component */}
				<Tab.Container defaultActiveKey='login'>
					<Modal.Header closeButton>
						<Modal.Title id='signup-modal'>
							<Nav variant='pills'>
								<Nav.Item>
									<Nav.Link eventKey='login'className='text-info bg-light'>Login</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='signup' className='text-info bg-light'>Sign Up</Nav.Link>
								</Nav.Item>
							</Nav>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Tab.Content>
							<Tab.Pane eventKey='login' className='text-info'>
								<LoginForm handleModalClose={() => setShowModal(false)} />
							</Tab.Pane>
							<Tab.Pane eventKey='signup' className='text-info'>
								<SignUpForm handleModalClose={() => setShowModal(false)} />
							</Tab.Pane>
						</Tab.Content>
					</Modal.Body>
				</Tab.Container>
			</Modal>
		</>
	);
};

export default AppNavbar;