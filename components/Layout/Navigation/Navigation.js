import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// import { useRouter } from "next/router";
import get from "lodash/get";

export default function Navbar({ data = {} }) {
	const navbar = get(data, "navbar", []);

	// const { query: { slug } = {} } = useRouter();

	return (
		<div className={"navigation flex justify-between"}>
			<div className={"navigation__logo"}>
				<img src="" alt=""/>
			</div>
			<nav className={"navigation__container"}>
				<ul className={"navigation__list flex"}>
					{
						navbar.map(({ slug, title }, idx) => {
							return (
								<li key={idx} className={"navigation__item ml-4"}>
									<Link href={slug} className={"navigation__link"}>
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
