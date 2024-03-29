import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import get from "lodash/get";

import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactBar from "./Bars/Contact";
import Catalog from "./Bars/Catalog";
import { Button, Input } from "@/components/elements/Form";
import Breadcrumbs from "@/components/elements/Breadcrumbs";
import { useFeedback } from "@/components/widgets/FeedbackForm";

export default function Layout({ children, global, pageProps }) {
	const footer = get(global, "footer", {});
	const contacts = get(global, "contacts.contacts", []);
	const social = get(global, "contacts.social", []);
	const headerMiddle = get(global, "header.middle", {});

	const { handleOpen } = useFeedback();

	const breadcrumbItems = get(pageProps, "breadcrumbItems", []);
	const items = get(pageProps, "breadcrumbs", true)
		?
		[
			...breadcrumbItems,
			{
				title: get(pageProps, "seo.metaTitle", ""),
				slug: get(pageProps, "slug", ""),
			},
		]
		: [];

	// TODO: Need to make multiple fields for footer andd header (navigation, meta, etc. ).

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header
				top={
					<ContactBar global={global} />
				}
				middle={
					<div className={"header-middle py-4 md:py-0"}>
						<div className={"container"}>
							<Navigation data={headerMiddle} global={global} />
						</div>
					</div>
				}
				bottom={
					<div className={"header-middle"}>
						<div className={"container flex flex-col md:flex-row px-4 mb-4"}>
							<div className={"w-full mb-4 mr-4 md:mb-0 md:w-2/12"}>
								<Catalog
									trigger={
										<Button
											key={`catalog-trigger-${isMobile}`}
											type={"primary"}
											text={"Каталог"}
											icon={isMobile ? "angle-down" : "angle-right"}
											iconPosition={"right"}
										/>
									}
								/>
							</div>
							<div className={"w-full mr-4 md:w-8/12"}>
								<Input
									type={"text"}
									placeholder={"Поиск"}
								/>
							</div>
							<div className={"hidden md:block md:w-2/12"}>
								<Button
									type={"primary"}
									handlers={{ onClick: handleOpen }}
									text={"Связаться"}
									icon={"phone"}
								/>
							</div>
						</div>
					</div>
				}
			/>
			<Breadcrumbs items={items} />
			{children}
			<Footer
				footer={footer}
				contacts={contacts}
				social={social}
			/>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
	global: PropTypes.object,
	pageProps: PropTypes.object,
};

Layout.defaultProps = {
	children: [],
	global: {},
	pageProps: {},
};
