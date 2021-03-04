import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";

export default function Articles({ heading }) {
	return (
		<Block
			heading={heading}
		>

		</Block>
	);
}

Articles.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
