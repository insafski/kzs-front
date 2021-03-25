import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "@/components/containers/Page";

import { client } from "../api/apollo";

export async function getStaticProps() {
	const result = await client.query({
		query: gql`
			query News {
				news(limit: 9) {
					createdAt
					deletedAt
					heading
					id
					picture
					publishedAt
					sections
					seo
					settings
					slug
					status
					updatedAt
				}
			}
		`,
	});

	const news = get(result, "data.news", {});

	return {
		props: {
			heading: {
				title: "Новости",
				type: "h1",
			},
			sections: [
				{
					component: "news",
					items: news,
					metadata: {},
				},
			],
		},
	};
}

export default Page;
