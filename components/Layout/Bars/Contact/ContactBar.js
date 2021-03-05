import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

export default function ContactBar({ data }) {
	const title = get(data, "header.top.title", "");

	return (
		<div className={"header-top hidden md:block pb-4 border-b border-gray-200"}>
			<div className={"container mx-auto px-4"}>
				<div className={"header-top__contacts flex justify-between"}>
					<div className={"flex w-4/12"}>
						{title}
					</div>
					<ul className={"header-top__list flex w-8/12 justify-end"}>
						<li className={"header-top__item ml-4"}>
							<a href="tel:+79148884566">
								{/* /huinyo eto / */}
								{get(data, "contacts[3].title")}
							</a>
						</li>
						<li className={"header-top__item ml-4"}>
							<a href="mailto:piss@mail.ru">
								{get(data, "contacts[0].title")}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

ContactBar.propTypes = {
	data: PropTypes.object,
};
