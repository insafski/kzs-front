import React from "react";
import PropTypes from "prop-types";
// import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default";
import { Gallery } from "react-photoswipe-gallery";
import uniqueId from "lodash/uniqueId";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

export default function ImageGallery({ id, children }) {
	return (
		<Gallery id={id}>
			<div className={"image-gallery flex py-4"}>
				{children}
			</div>
		</Gallery>
	);
}

ImageGallery.propTypes = {
	id: PropTypes.string,
};

ImageGallery.defaultProps = {
	id: uniqueId(),
};
