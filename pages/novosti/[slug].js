import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "@/components/containers/Page";
import { DETAILED_NEWS } from "@/queries/queries.graphql";
import { client } from "../api/apollo";

// FIXME: Need to move query to queries component

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

export async function getStaticProps({ params }) {
	const result = await client.query({
		query: DETAILED_NEWS,
		variables: params,
	});

	const page = get(result, "data.news[0]", {});

	return {
		props: {
			...page,
			breadcrumbItems: [{
				title: "Новости",
				slug: "/novosti",
			}],
		},
	};
}

export default Page;
