import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";

export default function Feedback({ heading }) {
	return (
		<Block heading={heading} className={"feedback"}>
		</Block>
	);
}

Feedback.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
