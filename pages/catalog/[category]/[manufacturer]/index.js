import { gql } from "@apollo/client";
import get from "lodash/get";

import { Manufacturer } from "@/components/containers/Page";
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

	const paths = manufacturers.map(({ slug }) => (
		{
			params: {
				manufacturer: slug,
				category: "vtulki",
			},
		}
	));

	categories.forEach(({ slug }) => {
		paths.forEach(path => {
			path.params.category = slug;
		});
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	console.log({ params });

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

	console.log({ products });

	return {
		props: {
			...page,
			products,
		},
	};
}

export default Manufacturer;
