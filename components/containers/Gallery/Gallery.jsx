import React from "react";
import PropTypes from "prop-types";
// import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default";
import { Gallery as DromGallery } from "react-photoswipe-gallery";
import uniqueId from "lodash/uniqueId";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

export default function Gallery({ id, children }) {
	return (
		<DromGallery id={id}>
			<div className={"image-gallery flex py-4"}>
				{children}
			</div>
		</DromGallery>
	);
}

Gallery.propTypes = {
	id: PropTypes.string,
};

Gallery.defaultProps = {
	id: uniqueId(),
};
