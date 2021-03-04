import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

export default function ContactBar({ data }) {
	return (
	// <div className={"container mx-auto flex justify-between"}>
	// 	<span className={"flex w-4/12"}>
	// 		Lorem ipsum dolor sit, amet consectetur adipisicing elit.
	// 	</span>
	// 	<ul className={"flex w-8/12"}>
	// 		<li className={"contact-bar__item"}>
	// 			<a href="" className={"contact-bar__link"}>
	// 				+79148888888
	// 			</a>
	// 		</li>
	// 		<li className={"contact-bar__item"}>
	// 			<a href="" className={"contact-bar__link"}>
	// 				sooqa@sooqa.ru
	// 			</a>
	// 		</li>
	// 	</ul>
	// </div>

		<div className={"header-top pb-4 border-b border-gray-200"}>
			<div className={"container mx-auto"}>
				<div className={"header-top__contacts flex justify-between"}>
					<div className={"flex w-4/12"}>
						{get(data, "header.top.title", "")}
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
