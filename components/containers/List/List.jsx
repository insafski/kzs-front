import { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import ListItem from "../../elements/ListElement";

import Gallery from "../Gallery";

const containersMap = {
	"photo-gallery": Gallery,
	"imperial": "div",
	get(type) {
		return this[type] || this.imperial;
	},
};

export default function List({ items, type, className, container }) {
	return createElement(
		containersMap.get(container),
		{
			id: `${type}-${container}`,
			className: cx("list", className),
		},
		items.map((item, idx) => {
			return createElement(
				ListItem.get(type),
				{
					key: `${type}-${idx}`,
					...item,
				},
				null,
			);
		}),
	);
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	container: PropTypes.string,
};

List.defaultProps = {
	items: [],
	type: "Default",
	className: "flex",
	container: "imperial",
};

List.displayName = "List";
