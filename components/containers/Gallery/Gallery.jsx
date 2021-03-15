import React from "react";
import PropTypes from "prop-types";
// import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default";
import { Gallery as DromGallery } from "react-photoswipe-gallery";
import uniqueId from "lodash/uniqueId";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

export default function Gallery({ id, items }) {
	return (
		<DromGallery id={id}>
			{
				items.map(({ src }, idx) => {
					return (
						<div key={"idx"}>{src}</div>
					);
				})
			}
		</DromGallery>
	);
}

Gallery.propTypes = {
	id: PropTypes.string,
};

Gallery.defaultProps = {
	id: uniqueId(),
};
