import { gql } from "@apollo/client";
import get from "lodash/get";

import { client } from "../pages/api/apollo";

export function getHasuraURL(path) {
	return `${process.env.NEXT_HASURA_ENDPOINT || "http://localhost:1337"}${path}`;
}

export function getStrapiURL(path) {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl);
	const data = await response.json();

	return data;
}

export async function getPageData(slug, preview = false) {
	// Find the pages that match this slug
	const pagesData = await fetchAPI(`/pages?slug=${slug}&status=published${preview ? "&status=draft" : ""}`);

	// Make sure we found something, otherwise return null
	if (pagesData == null || pagesData.length === 0) {
		return null;
	}

	// Return the first item since there should only be one result per slug
	return pagesData[0];
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData() {
	const result = await client.query({
		query: gql`
			query Globals {
				globals {
					updatedAt
					settings
					metaData
					params
					id
					header
					footer
					deletedAt
					createdAt
					contacts
				}
			}
		`,
	});

	const global = get(result, "data.globals[0]", {});

	return global;
}

export async function getManufacturersData() {
	// const result = await client.query({
	// 	query: gql`
	// 		query Manufacturers {
	// 			manufacturers {
	// 				createdAt
	// 				deletedAt
	// 				id
	// 				picture
	// 				seo
	// 				status
	// 				title
	// 				updatedAt
	// 				url
	// 			}
	// 		}
	// 	`,
	// });

	const manufacturers = [];// get(result, "data.manufacturers", {});

	return manufacturers;
}
