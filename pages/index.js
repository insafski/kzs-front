import React from "react";
import get from "lodash/get";

import { MAIN_PAGE } from "@/queries/queries.graphql";

import Page from "../components/containers/Page";
import { client } from "./api/apollo";

export async function getStaticProps({ params }) {
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
			breadcrumbs: false,
		},
	};
}

function MainPage(props) {
	return <Page {...props} mainPage />;
}

export default MainPage;
