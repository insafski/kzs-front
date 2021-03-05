import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Navbar from "./Navigation";
import Footer from "./Footer";
import ContactBar from "./Bars/Contact";

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
						<div className={"container mx-auto px-4"}>
							<Navbar data={headerMiddle} />
						</div>
					</div>
				}
				bottom={
					<div className={"header-middle pt-4"}>
						<div className={"container mx-auto px-4"}>
							<button>Каталог</button>
							<input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50" />
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
