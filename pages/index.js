import React from "react";
import { gql } from "@apollo/client";
import get from "lodash/get";

import Page from "../components/containers/Page";

import { MAIN_PAGE } from "@/queries/queries.graphql";

import { client } from "./api/apollo";

export async function getStaticProps({ params, preview = null }) {
	const result = await client.query({
		query: MAIN_PAGE,
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
