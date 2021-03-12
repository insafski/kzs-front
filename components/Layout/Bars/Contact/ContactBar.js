import React, { useContext } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import Icon from "@/components/elements/Icon";
import { AddressContext } from "@/components/widgets/Address";

export default function ContactBar({ data }) {
	const { handleOpen } = useContext(AddressContext);

	const title = get(data, "header.top.title", "");

	return (
		<div className={"header-top hidden md:block pb-4 md:pt-4 border-b border-yellow-600"}>
			<div className={"container mx-auto px-4"}>
				<div className={"header-top__contacts flex justify-between"}>
					<div className={"flex w-4/12"}>
						{title}
					</div>
					<ul className={"header-top__list flex w-8/12 justify-end"}>
						<li className={"header-top__item ml-4"}>
							<a href="tel:+79148884566">
								<Icon type={"phone"} className={"mr-2"} />
								{get(data, "contacts[3].title")}
							</a>
						</li>
						<li className={"header-top__item ml-4"}>
							<a href="mailto:piss@mail.ru">
								<Icon type={"mail"} className={"mr-2"} />
								{get(data, "contacts[0].title")}
							</a>
						</li>
						<li className={"header-top__item ml-4"}>
							<a href={"/#"} onClick={handleOpen}>
								<Icon type={"location"} className={"mr-2"} />
								Карла маркса, 5
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
