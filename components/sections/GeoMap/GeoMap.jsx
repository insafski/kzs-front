import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import GeoMap from "@/components/elements/GeoMap";

export default function MapSection() {
	return (
		<Block className={"text"} padding={""}>
			<div className={"w-full h-60 md:h-96"} style={{ height: "50vh" }}>
				<GeoMap />
			</div>
		</Block>
	);
}

MapSection.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
