import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query me {
	me {
		_id
		username
		email
		bookCount
		savedBooks {
			_id
			authors
			description
			title
			image
			link
		}
	}
}
`;

export const QUERY_STAFF = gql`
	query staff {
		staff {
			firstName
			lastName
			email
			title
			extension
			office
		}
	}
`;