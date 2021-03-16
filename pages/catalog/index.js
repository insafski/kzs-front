import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "../../components/containers/Page";

import { client } from "../api/apollo";

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query Manufactures {
				manufacturers {
					id
					heading
					createdAt
					deletedAt
					picture
					seo
					status
					updatedAt
					url
				}
			}
		`,
	});

	const manufacturers = get(result, "data.manufacturers", {});

	return {
		props: {
			sections: [
				{
					component: "catalog",
					items: manufacturers,
					metadata: {},
				},
			],
		},
	};
}

export default Page;