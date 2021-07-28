const { User, Thought } = require("../models");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("thoughts")
        .populate("friends");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
    // get all thoughts
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    // get a thought by __id
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
  },
  // Mutations
  Mutation: {
    addUser: async (parent, args) => {
      //Mongoose User model adds new user in database with what's passed in as args.
      const user = await User.create(args);

      return user;
    },
    login: async () => {

    }
  }
};

module.exports = resolvers;
