// import the gql Tagged Template function
const { gql } = require("apollo-server-express");

// create our typeDefs Queries
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

// export the typeDefs
module.exports = typeDefs;
