import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

// pages
import StaffDirectory from './pages/StaffDirectory';
import SearchBooks from './pages/SearchBooks';
import Navbar from './pages/Navbar';
import Schedule from './pages/Schedule';

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<>
					<Navbar />
					<Switch>
						<Route exact path='/' component={ SearchBooks } />
						<Route exact path='/calendar' component={ Schedule } />
						<Route exact path='/staff' component={ StaffDirectory } />
						<Route render={() => <h3>Oops. This page isn't the right one.  Try navigating to another page.</h3>} />
					</Switch>
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;
