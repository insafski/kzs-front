import React from "react";
import ErrorPage from "next/error";
import { getStrapiURL, getPageData } from "utils/api";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";

import Sections from "@/components/sections";
import Seo from "@/components/elements/seo";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ sections, metadata, preview, slug }) => {
	const router = useRouter();

	// Check if the required data was provided
	if (!router.isFallback && !sections?.length) {
		return <ErrorPage statusCode={404} />;
	}

	// Loading screen (only possible in preview mode)
	if (router.isFallback) {
		return <div className="container">Loading...</div>;
	}

	console.log(sections);

	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			{ sections && <Sections sections={sections} preview={preview} />}
			{slug === "contact" && (
				<div width={"100%"}>
					<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A886f655d541db893c449c7ec6e4ab1ee6bbc51500a8d7834e993042b0df2e456&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
				</div>
			)}
		</>
	);
};

DynamicPage.propTypes = {
	sections: PropTypes.array,
	metadata: PropTypes.object,
	preview: PropTypes.bool,
	slug: PropTypes.string,
};

export async function getStaticPaths() {
	// Get all pages from Strapi
	const pages = await (await fetch(getStrapiURL("/pages"))).json();
	//   const pages = data.pages;

	const paths = pages.map(page => {
		// Decompose the slug that was saved in Strapi
		const slugArray = page.slug.split("__");

		return {
			params: { slug: slugArray },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	// Find the page data for the current slug
	let chainedSlugs;
	if (params === {} || !params.slug) {
		// To get the homepage, find the only page where slug is an empty string
		chainedSlugs = "";
	} else {
		// Otherwise find a page with a matching slug
		// Recompose the slug that was saved in Strapi
		chainedSlugs = params.slug.join("__");
	}

	// Fetch pages. Include drafts if preview mode is on
	const pageData = await getPageData(chainedSlugs, preview);

	if (pageData == null) {
		// Giving the page no props will trigger a 404 page
		return { props: {} };
	}

	// We have the required page data, pass it to the page component
	const { contentSections = {}, metadata = {} } = pageData;

	return {
		props: {
			preview,
			sections: contentSections,
			metadata,
			slug: chainedSlugs,
		},
	};
}

export default DynamicPage;
