import { func } from "prop-types";

import React from "react";
import PropTypes from "prop-types";

export default function GeoMap({ width, height }) {
	return (
		<iframe
			src="https://yandex.ru/map-widget/v1/?um=constructor%3Aef387b32a1a260b7a7fa2aa91bcc8a9ab2de34b41c3354ad4c65e61d7b8f83b6&amp;source=constructor"
			width={width}
			height={height}
			frameBorder="0"
		/>
	);
}

GeoMap.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
};

GeoMap.defaultProps = {
	width: "100%",
	height: "100%",
};
