import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
// import { getStrapiMedia } from "utils/media";
import { getGlobalData } from "utils/api";

import Layout from "@/components/Layout";
import "@/styles/index.css";
// import "react-image-gallery/styles/css/image-gallery.css";

export default function Application({ Component, pageProps }) {
	// Prevent Next bug when it tries to render the [[...slug]] route
	const router = useRouter();

	if (router.asPath === "/[[...slug]]") {
		return null;
	}

	// Extract the data we need
	const { global } = pageProps;

	if (global == null) {
		return <ErrorPage statusCode={404} />;
	}
	const { metadata } = global;

	// console.log("metadata", metadata);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href={"/"} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</Head>
			<DefaultSeo
				titleTemplate={`%s | ${global.metaTitleSuffix}`}
				title={"Page"}
				// description={metadata.metaDescription}
				// openGraph={{
				//   images: Object.values(metadata.shareImage.formats).map((image) => {
				//     return {
				//       url: getStrapiMedia(image.url),
				//       width: image.width,
				//       height: image.height,
				//     };
				//   }),
				// }}
				// twitter={{
				// 	cardType: metadata.twitterCardType,
				// 	handle: metadata.twitterUsername,
				// }}
			/>
			<Layout global={global}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
Application.getInitialProps = async ctx => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx);
	// Fetch global site settings from Strapi
	const global = await getGlobalData();

	// Pass the data to our page via props
	return {
		...appProps,
		pageProps: {
			global,
			path: ctx.pathname,
		},
	};
};

Application.propTypes = {
	Component: PropTypes.node,
	pageProps: PropTypes.object,
};
