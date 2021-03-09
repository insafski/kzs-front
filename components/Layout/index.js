import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Navbar from "./Navigation";
import Footer from "./Footer";
import ContactBar from "./Bars/Contact";
import Catalog from "./Bars/Catalog";

export default function Layout({ children, global }) {
	const { footer, header: { middle: headerMiddle }, contacts } = global;

	// TODO: Need to make multiple fields for footer andd header (navigation, meta, etc. ).

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header
				top={
					<ContactBar data={global} />
				}
				middle={
					<div className={"header-middle md:pt-4"}>
						<div className={"container mx-auto px-4 py-4 bg-gray-100"}>
							<Navbar data={headerMiddle} />
						</div>
					</div>
				}
				bottom={
					<div className={"header-middle pt-4"}>
						<div className={"container mx-auto px-4 mb-4"}>
							<Catalog />
						</div>
						<div className={"container mx-auto px-4 text-md"}>
							<input
								type="text"
								className={"block w-full rounded-md border-gray-100 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"}
								placeholder={"Поиск"}
							/>
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
