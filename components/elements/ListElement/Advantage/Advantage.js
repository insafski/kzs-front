import React from "react";
import PropTypes from "prop-types";

import Image from "../../Image";

export default function Advantage({ title, description, picture }) {
	return (
		<div className={"advantage-item w-1/2 md:w-1/4"}>
			<Image picture={picture} />
			<span className={"advantage-item__title mb-4"}>
				{title}
			</span>
			<span className={"advantage-item__description"}>
				{description}
			</span>
		</div>
	);
}

Advantage.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	picture: PropTypes.shape({
		src: PropTypes.string,
		alt: PropTypes.string,
		title: PropTypes.string,
	}),
};

Advantage.propTypes = {
	title: "",
	description: "",
	picture: {
		src: "",
		alt: "",
		title: "",
	},
};
