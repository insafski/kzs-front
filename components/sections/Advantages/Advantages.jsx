import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import List from "../../containers/List";

export default function Advantages({ heading, items }) {
	return (
		<Block heading={heading} className={"advantages"}>
			<div className={"container px-4"}>
				<List items={items} type={"advantage"} className={"flex flex-wrap"} />
			</div>
		</Block>
	);
}

Advantages.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
};

Advantages.defaultProps = {
	heading: {
		title: "",
		subtitle: "",
		subText: "",
	},
	items: [],
};

Advantages.displayName = "Advantages";
