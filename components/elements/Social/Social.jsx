import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";

export default function Social({ items, className }) {
	const colorMap = {
		"instagram": "yellow",
		"vkontakte": "blue",
		"facebook-squared": "blue",
	};

	return (
		<div className={cx("social", className)}>
			{
				items.map(({ icon, link }, idx) => {
					return (
						<a
							key={idx}
							href={link}
							className={`social__item text-3xl transition-colors duration-500 ease-in-out hover:text-${colorMap[icon]}-400 mr-2`}
							target={"_blank"}
							rel={"noreferrer"}
						>
							<Icon type={icon} />
						</a>
					);
				})
			}
		</div>
	);
}

Social.propTypes = {
	items: PropTypes.array,
	className: PropTypes.string,
};
