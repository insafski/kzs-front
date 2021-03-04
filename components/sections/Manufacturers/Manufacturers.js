import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import List from "../../containers/List";

export default function Manufacturers({ heading, items }) {
	return (
		<Block heading={heading} className={"manufacturers"}>
			<div className="container mx-auto">
				<List items={items} type={"manufacturer"} />
			</div>
		</Block>
	);
}

Manufacturers.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
};
