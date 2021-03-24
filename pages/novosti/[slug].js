import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "@/components/containers/Page";
import { client } from "../api/apollo";

export async function getStaticPaths() {
	const result = await client.query({
		query: gql`
			query News {
				news {
					slug
				}
			}
		`,
	});

	const paths = get(result, "data.news", []).map(({ slug }) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query News($slug: String!) {
				news(where: {slug: {_eq: $slug}}) {
					id
					heading
					createdAt
					deletedAt
					picture
					sections
					settings
					slug
					status
					updatedAt
				}
			}
		`,
		variables: params,
	});

	const page = get(result, "data.news[0]", {});

	return {
		props: page,
	};
}

export default Page;
