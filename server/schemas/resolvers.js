// Require schemas
const { User, Thought } = require("../models");

// resolver that will serve the response for the query.
const resolvers = {
  Query: {
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
