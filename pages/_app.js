import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { getGlobalData, getManufacturersData } from "utils/api";
import get from "lodash/get";

import { FeedbackProvider } from "@/components/widgets/FeedbackForm";
import { AddressProvider } from "@/components/widgets/Address";
import Layout from "@/components/Layout";
import "@/styles/index.css";

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
	const { seo } = global;

	return (
		<>
			<Head>
				<link rel="shortcut icon" href={"/"} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</Head>
			<DefaultSeo
				titleTemplate={`%s | ${seo.metaTitleSuffix}`}
				title={get(pageProps, "seo.metaTitle", "Каззапчастьсервис")}
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
			<FeedbackProvider>
				<AddressProvider>
					<Layout global={global}>
						<Component {...pageProps} />
					</Layout>
				</AddressProvider>
			</FeedbackProvider>
		</>
	);
}

Application.getInitialProps = async ctx => {
	const appProps = await App.getInitialProps(ctx);
	const global = await getGlobalData();
	const manufacturers = await getManufacturersData();

	// Pass the data to our page via props
	return {
		...appProps,
		pageProps: {
			global,
			path: ctx.pathname,
			manufacturers,
		},
	};
};

Application.propTypes = {
	Component: PropTypes.node,
	pageProps: PropTypes.object,
};
