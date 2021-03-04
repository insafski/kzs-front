import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Navbar from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children, global }) {
	const { footer, header } = global;

	console.log({ global });

	// TODO: Need to make multiple fields for footer andd header (navigation, meta, etc. ).

	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header
				top={
					<div className={"header-top pb-4 border-b border-gray-200"}>
						<div className={"container mx-auto"}>
							<div className={"header-top__contacts flex justify-end"}>
								<ul className={"header-top__list flex"}>
									<li className={"header-top__item ml-4"}>
										<a href="tel:+79148884566">
											+7 914 888 45 66
										</a>
									</li>
									<li className={"header-top__item ml-4"}>
										<a href="mailto:piss@mail.ru">
											piss@mail.ru
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				}
				middle={
					<div className={"header-middle pt-4"}>
						<div className={"container mx-auto"}>
							<Navbar data={header} />
						</div>
					</div>
				}
				bottom={
					<div className={"header-middle pt-4"}>
						<div className={"container mx-auto"}>
							<button>Каталог</button>
							<input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
						</div>
					</div>
				}
			/>
			{children}
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
