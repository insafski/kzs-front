import React from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";

import Sections from "../Sections";
import Seo from "@/components/elements/seo";
import Block from "@/components/containers/Block";

export default function Page({ sections, metadata, manufacturers, heading, mainPage, title, subTitle, preview, slug, description }) {
	const router = useRouter();

	// // Check if the required data was provided
	// if (!router.isFallback && !sections?.length) {
	// 	return <ErrorPage statusCode={404} />;
	// }

	// // Loading screen (only possible in preview mode)
	// if (router.isFallback) {
	// 	return <div className="container">Loading...</div>;
	// }

	if (!heading) {
		heading = {
			title,
			subTitle,
		};
	}

	return (
		<>
			<Seo metadata={metadata} />
			{
				!mainPage && (<Block heading={heading} />)}
			<Sections sections={sections} manufacturers={manufacturers} />
		</>
	);
}

Page.propTypes = {
	sections: PropTypes.array,
	metadata: PropTypes.object,
	preview: PropTypes.bool,
	slug: PropTypes.string,
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	mainPage: PropTypes.bool,
};

Page.defaultProps = {
	sections: [],
	metadata: {},
	preview: false,
	slug: "",
	// heading: {
	// 	title: "Самостоятельная страница",
	// },
	mainPage: false,
};

Page.displayName = "Page";
