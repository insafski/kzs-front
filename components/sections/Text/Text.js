import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";

export default function Text({ heading }) {
	return (
		<Block heading={heading} className={"text"}>

		</Block>
	);
}

Text.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
