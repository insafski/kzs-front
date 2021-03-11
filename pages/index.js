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
					createdAt
					deletedAt
					description
					picture
					sections
					metaData
					settings
					slug
					status
					subTitle
					title
					updatedAt
				}
			}
		`,
		variables: params,
	});

	const page = get(result, "data.pages[0]", {});

	return {
		props: page,
	};
}

function MainPage(props) {
	return <Page {...props} mainPage />;
}

export default MainPage;
