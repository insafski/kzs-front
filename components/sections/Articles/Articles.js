import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import List from "../../containers/List";

export default function Articles({ heading, items }) {
	return (
		<Block
			heading={heading}
		>
			<List items={items} type={"article"} />
		</Block>
	);
}

Articles.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
};
