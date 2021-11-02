import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

// components
// import StaffSchedule from './components/StaffSchedule';
// import RequestTimeOff from './components/RequestTimeOff';
import StaffSearch from "./components/StaffSearch";
// pages
import StaffDirectory from "./pages/StaffDirectory";
import SearchBooks from "./pages/SearchBooks";
// import SavedBooks from './pages/SavedBooks';
import Navbar from "./pages/Navbar";
import Schedule from "./pages/Schedule";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App({ Component }) {
  return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            {/* Sidebar for itaff info - reference issue #17 Edit Staff Info - Edit Staff Info */}
            {/* <Sidebar /> */}
            <Switch>
              <Route exact path="/" component={SearchBooks} />
              <Route exact path="/calendar" component={Schedule} />
              <Route exact path="/staff" component={StaffDirectory} />
              <Route exact path="/staff" component={StaffSearch} />
              {/* <Route exact path='/timeOff' component={ RequestTimeOff } /> */}
              <Route
                render={() => <h1 className="display-2">Wrong page!</h1>}
              />
            </Switch>
          </>
        </Router>
      </ApolloProvider>
  );
}

export default App;
