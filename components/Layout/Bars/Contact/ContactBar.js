import React from "react";

export default function ContactBar() {
	return (
		<div className={"contact-bar flex justify-between"}>
			<span className={"contact-bar__text"}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			</span>
			<ul className={"contact-bar__list"}>
				<li className={"contact-bar__item"}>
					<a href="" className={"contact-bar__link"}>
						+79148888888
					</a>
				</li>
				<li className={"contact-bar__item"}>
					<a href="" className={"contact-bar__link"}>
						sooqa@sooqa.ru
					</a>
				</li>
			</ul>
		</div>
	);
}
