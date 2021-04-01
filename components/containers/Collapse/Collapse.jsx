import React, { createElement } from "react";
import PropTypes from "prop-types";
import RCCollapse from "rc-collapse";

import motion from "@/utils/motion.js";
import Icon from "@/components/elements/Icon";
import ListItem from "@/components/elements/ListElement";

export default function Collapse({ accordion, items, type }) {
	return (
		<RCCollapse
			accordion={accordion}
			className={"border-0"}
			openMotion={motion}
			expandIcon={({ isActive }) => <Icon type={isActive ? "angle-up" : "angle-down"} className={"mr-4"} />}
		>
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
		</RCCollapse>
	);
}

Collapse.propTypes = {
	accordion: PropTypes.bool,
	items: PropTypes.arrayOf(PropTypes.shape({
		header: PropTypes.object,
		image: PropTypes.string,
		links: PropTypes.array,
	})),
	type: PropTypes.string,
};

Collapse.propTypes = {
	accordion: false,
	items: [],
	type: "",
};

Collapse.displayName = "Collapse";
