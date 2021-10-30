// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		bookCount: Int
		# savedBooks: [Book]
	}

	type Staff {
		_id: ID
		firstName: String
		lastName: String
		email: String
		title: String
		extension: Int
		office: Int
	}

	type Book {
		_id: ID
		authors: [String!]
		description: String
		title: String
		image: String
		link: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		staff: [Staff]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(username: String!, email: String!, password: String!): Auth
		# saveBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!): User
		# removeBook(bookId: String!): User
	
	}
`;

module.exports = typeDefs;
