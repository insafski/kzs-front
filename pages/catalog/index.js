import { gql } from "@apollo/client";
import get from "lodash/get";

import { Catalog } from "../../components/containers/Page";

import { client } from "../api/apollo";

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query CategoryPage {
				categories {
					heading
					slug
					picture
				}

				manufacturers {
					id
					heading
					createdAt
					deletedAt
					picture
					seo
					status
					updatedAt
					slug
				}
			}
		`,
	});

	const categories = get(result, "data.categories", {});
	const manufacturers = get(result, "data.manufacturers", {});

	return {
		props: {
			categories,
			manufacturers,
		},
	};
}

export default Catalog;
