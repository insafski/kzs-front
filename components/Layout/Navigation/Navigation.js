import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import get from "lodash/get";

export default function Navbar({ data = {} }) {
	// console.log("navbar data", data);

	const { query: { slug } = {} } = useRouter();

	return (
		<nav className={"navigation flex justify-between"}>
			<div className={"navigation__logo"}>
				<img src="" alt=""/>
			</div>
			<nav className={"navigation"}>
				<ul className={"navigation__list flex"}>
					<li className={"navigation__item ml-6"}>
						<a href="" className={"navigation__link"}>
                        Главная
						</a>
					</li>
					<li className={"navigation__item ml-6"}>
						<a href="" className={"navigation__link"}>
                        О нас
						</a>
					</li>
					<li className={"navigation__item ml-6"}>
						<a href="" className={"navigation__link"}>
                        Услуги
						</a>
					</li>
					<li className={"navigation__item ml-6"}>
						<a href="" className={"navigation__link"}>
                        Контакты
						</a>
					</li>
					<li className={"navigation__item ml-6"}>
						<a href="" className={"navigation__link"}>
                        Галерея
						</a>
					</li>
				</ul>
			</nav>
		</nav>
	);
}

Navbar.propTypes = {
	data: PropTypes.object,
};
