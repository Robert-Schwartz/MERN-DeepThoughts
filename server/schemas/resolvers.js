// Require schemas
const { User, Thought } = require("../models");

// resolver that will serve the response for the query.
const resolvers = {
  Query: {
    thoughts: async () => {
      return Thought.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
