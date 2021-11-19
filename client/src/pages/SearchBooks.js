import React, { useState } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { searchGoogleBooks } from '../utils/API';
import Auth from '../utils/auth';

const SearchBooks = () => {
	// create state for holding returned google api data
	const [searchedBooks, setSearchedBooks] = useState([]);
	// create state for holding our search field data
	const [searchInput, setSearchInput] = useState('');


	// create method to search for books and set state on form submit
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		if (!searchInput) {
			return false;
		}

		try {
			const response = await searchGoogleBooks(searchInput);

			if (!response.ok) {
				throw new Error('something went wrong!');
			}

			const { items } = await response.json();

			const bookData = items.map((book) => ({
				bookId: book.id,
				authors: book.volumeInfo.authors || ['No author to display'],
				title: book.volumeInfo.title,
				description: book.volumeInfo.description,
				image: book.volumeInfo.imageLinks?.thumbnail || '',
			}));

			setSearchedBooks(bookData);
			setSearchInput('');
		} catch (err) {
			console.error(err);
		}
	};


	return (
		<>
			<Jumbotron fluid className='text-light bg-info'>
				<Container>
					{/* if user is logged in show search books and logout */}
					{Auth.loggedIn() ? (
						<>
							<h1>Look for books in the lovely database!</h1>
							<Form onSubmit={handleFormSubmit}>
								<Form.Row>
									<Col xs={12} md={8}>
										<Form.Control
											name='searchInput'
											value={searchInput}
											onChange={(e) => setSearchInput(e.target.value)}
											type='text'
											size='lg'
											placeholder='Book Title'
										/>
									</Col>
									<Col xs={12} md={4}>
										<Button type='submit' className= "text-white bg-info border-light"  size='lg'>
											Search
										</Button>
									</Col>
								</Form.Row>
							</Form>
						</>
					) : (
						<h1>Welcome to Lovely Librarian, your library toolkit!</h1> 
					)}
				</Container>
			</Jumbotron>

			<Container>
				{/* if user is logged in show search books and logout */}
				{Auth.loggedIn() ? (
					<>
						<h2>
							{searchedBooks.length
								? `Viewing ${searchedBooks.length} results:`
								: '📚 No Results Yet 📚'}
						</h2>
					</>
				) : (
					<h4><span role="img" aria-label="Book Emoji">📚</span> Please log in to begin.<span role="img" aria-label="Book Emoji">📚</span></h4>
				)}
				<CardColumns>
					{searchedBooks.map((book) => {
						return (
							<Card key={book.bookId} border='dark'>
								{book.image ? (
									<Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
								) : null}
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
									<p className='small'>Authors: {book.authors}</p>
									<Card.Text>{book.description}</Card.Text>
								</Card.Body>
							</Card>
						);
					})}
				</CardColumns>
			</Container>
		</>
	);
};

export default SearchBooks;