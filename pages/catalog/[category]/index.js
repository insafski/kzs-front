import { gql } from "@apollo/client";
import get from "lodash/get";

import { Category } from "@/components/containers/Page";
import { client } from "../../api/apollo";

export async function getStaticPaths() {
	const result = await client.query({
		query: gql`
			query MyQuery {
				categories {
					slug
				}
			}
		`,
	});

	const paths = get(result, "data.categories", []).map(({ slug }) => ({ params: { category: slug } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query Category($category: String!) {
				categories(where: {slug: {_eq: $category}}) {
					slug
					createdAt
					deletedAt
					heading
					id
					seo
					status
					updatedAt
				}
				products(where: {category: {slug: {_eq: $category}}}, limit: 10) {
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

	const page = get(result, "data.categories[0]", {});
	const products = get(result, "data.products", []);

	return {
		props: {
			...page,
			products,
		},
	};
}

export default Category;
