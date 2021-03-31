import React from "react";
import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "../components/containers/Page";

import { client } from "./api/apollo";

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: gql`
			query Page {
				pages(where: {slug: {_eq: "/"}}) {
					id
					heading
					createdAt
					deletedAt
					picture
					sections
					metaData
					settings
					slug
					status
					updatedAt
				}

				news {
					heading
					picture
					publishedAt
					slug
				}

				products(limit: 8) {
					picture
					heading
					articul
					slug

					category {
					slug
					heading
					}
				}
			}
		`,
		variables: params,
	});

	const page = get(result, "data.pages[0]", {});
	const news = get(result, "data.news", []);
	const products = get(result, "data.products", []);

	return {
		props: {
			...page,
			news,
			products,
		},
	};
}

function MainPage(props) {
	return <Page {...props} mainPage />;
}

export default MainPage;
