import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, global }) {
	const { footer } = global;
	console.log({ global });

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header
				top={
					<div className={"pb-2 border-b border-gray-200"}>
						Интернет магазин
					</div>
				}
				navbar={<Navbar data={global.navbar} />}
				bottom={<div>Форма</div>}
			/>
			<div className="flex-1">
				<div>{children}</div>
			</div>
			<Footer footer={footer} />
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
