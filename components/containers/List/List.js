import React, { createElement } from "react";
import PropTypes from "prop-types";

import ListItem from "../../elements/ListElement";

export default function List({ items, type }) {
	return (
		<div className="list">
			{
				items.map((item, idx) => {
					return createElement(
						ListItem.get(type),
						{
							key: idx,
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
};

List.defaultProps = {
	items: [],
	type: "Default",
};

List.displayName = "List";
