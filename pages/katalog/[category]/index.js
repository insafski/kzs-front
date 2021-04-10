import { gql } from "@apollo/client";
import get from "lodash/get";

import { Catalog } from "@/components/containers/Page";
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

export async function getStaticProps({ params }) {
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
	const categories = get(result, "data.v_categories", []);

	return {
		props: {
			...page,
			products,
			categories,
			breadcrumbItems: [{
				title: "Каталог",
				slug: "/katalog",
			}],
		},
	};
}

export default Catalog;
