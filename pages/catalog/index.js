import { gql } from "@apollo/client";
import get from "lodash/get";

import { Catalog } from "@/components/containers/Page";

import { client } from "../api/apollo";

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query CategoryPage {
				v_categories {
					slug
					updatedAt
					status
					seo
					picture
					m_slug
					m_picture
					m_heading
					heading
					deletedAt
					createdAt
				}
				products(limit: 10) {
					updatedAt
					status
					slug
					seo
					picture
					params
					id
					heading
					deletedAt
					createdAt
					categoryid
					articul
					category {
						heading
						slug
					}
					manufacturers_products {
						manufacturer {
							slug
						}
					}
				}
			}
		`,
	});

	const categories = get(result, "data.v_categories", {});
	const products = get(result, "data.products", {});

	return {
		props: {
			categories,
			products,
		},
	};
}

export default Catalog;
