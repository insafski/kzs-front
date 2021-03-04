import React from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";

import Sections from "../Sections";
import Seo from "@/components/elements/seo";

export default function Page({ sections, metadata, preview, slug, description }) {
	const router = useRouter();

	// // Check if the required data was provided
	// if (!router.isFallback && !sections?.length) {
	// 	return <ErrorPage statusCode={404} />;
	// }

	// // Loading screen (only possible in preview mode)
	// if (router.isFallback) {
	// 	return <div className="container">Loading...</div>;
	// }

	// console.log("slug", slug);

	return (
		<>
			<Seo metadata={metadata} />
			<Sections sections={sections} />
		</>
	);
}

Page.propTypes = {
	sections: PropTypes.array,
	metadata: PropTypes.object,
	preview: PropTypes.bool,
	slug: PropTypes.string,
};

Page.defaultProps = {
	sections: [],
	metadata: {},
	preview: false,
	slug: "",
};

Page.displayName = "Page";
