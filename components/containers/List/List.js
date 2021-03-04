import React, { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ListItem from "../../elements/ListElement";

export default function List({ items, type, className }) {
	return (
		<div className={cx("list", className)}>
			{
				items.map((item, idx) => {
					return createElement(
						ListItem.get(type),
						{
							key: `${type}-${idx}`,
							...item,
						},
						null,
					);
				})
			}
		</div>
	);
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
};

List.defaultProps = {
	items: [],
	type: "Default",
	className: "flex",
};

List.displayName = "List";
