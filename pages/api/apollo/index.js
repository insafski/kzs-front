import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://kzs-db.herokuapp.com/v1/graphql",
	headers: {
		"content-type": "application/json",
		"credentials": "include",
		"x-hasura-admin-secret": "kvEzzbojvNgxZx61UJX92Yix7JGqyEki",
	},
	cache: new InMemoryCache(),
});

export { client };
