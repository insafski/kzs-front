import get from "lodash/get";

import Page from "@/components/containers/Page";
import { NEWS_INITIAL } from "@/queries/queries.graphql";

import { client } from "../api/apollo";

export async function getStaticProps() {
	const result = await client.query({
		query: NEWS_INITIAL,
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
