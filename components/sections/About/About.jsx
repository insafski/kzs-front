import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";

export default function About({ heading }) {
	return (
		<Block heading={heading} className={"about"}>
			<div className={"container mx-auto px-4"}>
				{/* О нас */}
			</div>
		</Block>
	);
}

About.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};

About.defaultProps = {
	data: {},
};

About.displayName = "About";
