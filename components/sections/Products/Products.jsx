import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";

export default function Products({ heading }) {
	return (
		<Block heading={heading} className={"products"}>
		</Block>
	);
}

Products.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
