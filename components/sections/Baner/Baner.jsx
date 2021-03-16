import React from "react";
import PropTypes from "prop-types";

import Carousel from "../../containers/Carousel";

export default function Baner({ items }) {
	return (
		<div className={"baner"}>
			<div className={"container"}>
				<Carousel items={items} />
			</div>
		</div>
	);
}

Baner.propTypes = {
	items: PropTypes.array,
};
