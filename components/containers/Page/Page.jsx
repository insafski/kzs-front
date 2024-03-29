import React, { useEffect } from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";

import Sections from "../Sections";
import Seo from "@/components/elements/seo";
import Block from "@/components/containers/Block";

export default function Page({ sections, metaData, manufacturers, heading, mainPage, title, subtitle, preview, slug, description, news, products }) {
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
			subtitle,
		};
	}

	return (
		<>
			<Seo metadata={metaData} />
			{
				!mainPage && (<Block heading={heading} padding={"pt-14"} underline={false} />)
			}
			<Sections sections={sections} manufacturers={manufacturers} news={news} products={products} />
		</>
	);
}

Page.propTypes = {
	sections: PropTypes.array,
	metaData: PropTypes.object,
	preview: PropTypes.bool,
	slug: PropTypes.string,
	heading: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	mainPage: PropTypes.bool,
};

Page.defaultProps = {
	sections: [],
	metaData: {},
	preview: false,
	slug: "",
	// heading: {
	// 	title: "Самостоятельная страница",
	// },
	mainPage: false,
};

Page.displayName = "Page";
