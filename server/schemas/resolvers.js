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
			console.log(result);
			return result;
				// .select('-__v');
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
		// saveBook: async (parent, args, context) => {
		// 	if (context.user) {
		// 		// const book = await Book.create({ ...args, username: context.user.username });
		
		// 		const userUpdate = await User.findByIdAndUpdate(
		// 			{ _id: context.user._id },
		// 			{ $push: { savedBooks: args.bookData } },
		// 			{ new: true }
		// 		);
		
		// 		return userUpdate;
		// 	}
		
		// 	throw new AuthenticationError('You can only save books if logged in!');
		// },
		// removeBook: async (parent, args, context) => {
		// 	if (context.user) {
		// 		// const book = await Book.remove({ ...args, username: context.user.username });
		
		// 		const userUpdate = await User.findByIdAndUpdate(
		// 			{ _id: context.user._id },
		// 			{ $pull: { savedBooks: { bookId: args.bookId } } },
		// 			{ new: true }
		// 		);
		
		// 		return userUpdate;
		// 	}
		
		// 	throw new AuthenticationError('You can only remove books if logged in!');
		// },
	}
};

module.exports = resolvers;
