// import the gql Tagged Template function
const { gql } = require("apollo-server-express");

// create our typeDefs Queries
const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
  }
  type Query {
    thoughts: [Thought]
  }
`;

// export the typeDefs
module.exports = typeDefs;
