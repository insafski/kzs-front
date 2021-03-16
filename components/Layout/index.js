import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import get from "lodash/get";

import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactBar from "./Bars/Contact";
import Catalog from "./Bars/Catalog";
import Button from "@/components/elements/Form/Button";
import Icon from "@/components/elements/Icon";

export default function Layout({ children, global }) {
	const footer = get(global, "footer", {});
	const contacts = get(global, "contacts", []);
	const headerMiddle = get(global, "header.middle", {});

	// TODO: Need to make multiple fields for footer andd header (navigation, meta, etc. ).

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header
				top={
					<ContactBar data={global} />
				}
				middle={
					<div className={"header-middle py-4 md:py-0"}>
						<div className={"container"}>
							<Navigation data={headerMiddle} />
						</div>
					</div>
				}
				bottom={
					<div className={"header-middle"}>
						<div className={"container flex flex-col md:flex-row px-4 mb-4"}>
							<div className={"w-full mb-4 mr-4 md:mb-0 md:w-2/12"}>
								<Catalog
									trigger={
										<Button key={`catalog-trigger-${isMobile}`}>
											{"Каталог"}
											<Icon type={isMobile ? "angle-down" : "angle-right"} />
										</Button>
									}
								/>
							</div>
							<div className={"w-full md:w-10/12"}>
								<input
									type="text"
									className={"block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm hover:border-yellow-400 focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50"}
									placeholder={"Поиск"}
								/>
							</div>
						</div>
					</div>
				}
			/>
			{children}
			<Footer footer={footer} contacts={contacts} />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
	global: PropTypes.object,
};

Layout.defaultProps = {
	children: [],
	global: {},
};
