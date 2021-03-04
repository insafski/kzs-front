import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// import { useRouter } from "next/router";
import get from "lodash/get";

export default function Navbar({ data = {} }) {
	const navigation = get(data, "navigation", []);

	// const { query: { slug } = {} } = useRouter();

	return (
		<div className={"navigation flex justify-between"}>
			<div className={"navigation__logo"}>
				<img src="" alt=""/>
			</div>
			<nav className={"navigation__container"}>
				<ul className={"navigation__list flex"}>
					{
						navigation.map(({ link, title }, idx) => {
							return (
								<li key={idx} className={"navigation__item ml-4"}>
									<Link href={link} className={"navigation__link"}>
										{title}
									</Link>
								</li>
							);
						})
					}
				</ul>
			</nav>
		</div>
	);
}

Navbar.propTypes = {
	data: PropTypes.object,
};
