import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import Image from "../../Image";

export default function Advantage({ title, description, picture }) {
	const src = get(picture, "[0].src", "");

	return (
		<div className={"advantage-item text-center px-2 md:px-4 mb-8 md:mb-4 w-full md:w-1/4"}>
			{/* <Image picture={picture} /> */}
			<div className={"flex justify-center"}>
				<img src={src} className={"mb-8"} style={{ height: 100 }} alt=""/>
			</div>
			<h3 className={"advantage-item__title mb-4 text-2xl md:text-xl font-semibold"}>
				{title}
			</h3>
			<p className={"advantage-item__description md:text-sm"}>
				{description}
			</p>
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
