const { User, Staff } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		// find data associated with user, if logged in
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select("-__v -password")

				return userData;
			}

			throw new AuthenticationError("This user is not logged in.");
		},
		// get all staff
		staff: async () => {
			let result = await Staff.find({});
			return result;
		}
	},
	Mutation: {
		// login to site, evaluate credentials, create token for user on successful evaluation
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Either your username or password is incorrect (or both 😓)");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Either your username or password is incorrect (or both 😓)");
			}

			const token = signToken(user);
			return { token, user };
		},
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		}
	}
};

module.exports = resolvers;
