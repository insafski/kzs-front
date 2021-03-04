import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import List from "../../containers/List";

export default function Advantages({ heading, items }) {
	return (
		<Block heading={heading} className={"advantages"}>
			<div className="container mx-auto">
				<List items={items} type={"advantage"} />
			</div>
		</Block>
	);
}

Advantages.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
};

Advantages.defaultProps = {
	heading: {
		title: "",
		subTitle: "",
		subText: "",
	},
	items: [],
};

Advantages.displayName = "Advantages";
