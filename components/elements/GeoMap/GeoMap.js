import { func } from "prop-types";

import React from "react";
import PropTypes from "prop-types";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function GeoMap({ width, height }) {
	return (
		<YMaps>
			<Map
				defaultState={
					{
						center: [55.743588, 49.129608],
						zoom: 15,
						controls: ["zoomControl", "fullscreenControl"],
					}
				}
				width={width}
				height={height}
				modules={["control.ZoomControl", "control.FullscreenControl"]}
				instanceRef={ref => {
					ref && ref.behaviors.disable("scrollZoom");
				}}
			>
				<Placemark defaultGeometry={[55.743213, 49.135466]} />
			</Map>
		</YMaps>
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
