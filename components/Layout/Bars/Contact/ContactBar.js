import React, { useContext, cloneElement } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import Icon from "@/components/elements/Icon";
import { AddressContext } from "@/components/widgets/Address";

export default function ContactBar({ global }) {
	const { handleOpen } = useContext(AddressContext);

	const handlersMap = {
		location: {
			onClick: handleOpen,
		},
	};

	const title = get(global, "header.top.title", "");
	const contacts = get(global, "contacts.contacts", []);

	return (
		<div className={"header-top hidden md:block py-2 border-b border-yellow-400"}>
			<div className={"container mx-auto px-4"}>
				<div className={"header-top__contacts flex justify-between"}>
					<div className={"flex w-4/12 text-sm"}>
						{title}
					</div>
					<ul className={"header-top__list flex w-8/12 justify-end"}>
						{
							contacts.map(({ link, icon, showtitle }, idx) => {
								return (
									<li key={idx} className={"header-top__item ml-4"}>
										{
											cloneElement(
												<a href={link} className={"text-sm"}>
													<Icon type={icon} className={"mr-1"} />
													{showtitle}
												</a>,
												{
													...handlersMap[icon],
												},
											)
										}
									</li>
								);
							})
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

ContactBar.propTypes = {
	global: PropTypes.object,
};
