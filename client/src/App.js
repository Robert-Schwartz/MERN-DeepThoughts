import React from "react";
import {
  //React component that we'll use to provide data to all of the other components
  ApolloProvider,
  //constructor function that will help initialize the connection to the GraphQL API server.
  ApolloClient,
  //enables the Apollo Client instance to cache API response data so that we can perform requests more efficiently.
  InMemoryCache,
  //control how the Apollo Client makes a request.
  createHttpLink,
} from "@apollo/client";

// components
// ==============================================
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
// ==============================================
import Home from "./pages/Home";

// establish a new link to the GraphQL server at its /graphql endpoint with createHttpLink()
// ==============================================
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

//constructor to instantiate the Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// App Declaration
// ==============================================
function App() {
  return (
    // enable our entire application to interact with our Apollo Client instance
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

// ==============================================
export default App;
