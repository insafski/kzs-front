import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "@/components/containers/Page";
import { client } from "./api/apollo";

export async function getStaticPaths() {
	const result = await client.query({
		query: gql`
			query Manufacturers {
				manufacturers {
					slug
				}
			}
		`,
	});

	const paths = get(result, "data.pages", []).map(({ slug }) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query Manufacturer($slug: String!) {
				manufacturers(where: {slug: {_eq: $slug}, _not: {slug: {_eq: "/"}}}) {
					id
					heading
					createdAt
					deletedAt
					picture
					sections
					seo
					settings
					slug
					status
					updatedAt
				}
			}
		`,
		variables: params,
	});

	const page = get(result, "data.manufacturers[0]", {});

	return {
		props: page,
	};
}

export default Page;
