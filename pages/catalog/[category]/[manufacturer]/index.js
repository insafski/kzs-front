import { gql } from "@apollo/client";
import get from "lodash/get";

import { Catalog } from "@/components/containers/Page";
import { client } from "../../../api/apollo";

export async function getStaticPaths() {
	const result = await client.query({
		query: gql`
			query Manufacturers {
				manufacturers {
					slug
				}
				categories {
					slug
				}
			}
		`,
	});

	const manufacturers = get(result, "data.manufacturers", []);
	const categories = get(result, "data.categories", []);

	const paths = [];

	categories.forEach(({ slug: category }) => {
		manufacturers.forEach(({ slug: manufacturer }) => {
			if (category && manufacturer) {
				paths.push({
					params: {
						manufacturer,
						category,
					},
				});
			}
		});
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query Manufacturer($manufacturer: String!, $category: String!) {
				manufacturers(where: {slug: {_eq: $manufacturer}}) {
					updatedAt
					status
					slug
					seo
					picture
					id
					heading
					deletedAt
					createdAt
				}
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
				products(where: {manufacturers_products: {manufacturer: {slug: {_eq: $manufacturer}}}, category: {slug: {_eq: $category}}}) {
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
		variables: params,
	});

	const page = get(result, "data.manufacturers[0]", {});
	const products = get(result, "data.products", []);
	const categories = get(result, "data.v_categories", []);

	return {
		props: {
			...page,
			products,
			categories,
		},
	};
}

export default Catalog;
