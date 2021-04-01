import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "@/components/containers/Page";
import { DETAILED_PAGE } from "@/queries/queries.graphql";
import { client } from "./api/apollo";

export async function getStaticPaths() {
	const result = await client.query({
		query: gql`
			query Pages {
				pages {
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
		query: DETAILED_PAGE,
		variables: params,
	});

	const page = get(result, "data.pages[0]", {});

	return {
		props: page,
	};
}

export default Page;
