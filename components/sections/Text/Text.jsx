import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";

export default function Text({ heading, text }) {
	return (
		<Block heading={heading} className={"text"}>
			<div className={"container"}>
				{text}
			</div>
		</Block>
	);
}

Text.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	text: PropTypes.string,
};
