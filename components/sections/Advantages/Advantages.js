import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";

export default function Advantages({ heading }) {
	return (
		<Block heading={heading} className={"advantages"}>
			<div className="container mx-auto">
				Преимущества
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
};
