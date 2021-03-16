import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";

export default function Social({ items, className }) {
	return (
		<div className={cx("social", className)}>
			{
				items.map(({ icon, link }, idx) => {
					return (
						<a
							key={idx}
							href={link}
							className={"social__item text-3xl"}
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
