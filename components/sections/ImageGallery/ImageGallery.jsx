import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import List from "@/components/containers/List";

export default function ImageGallery({ heading, items }) {
	return (
		<Block heading={heading} className={"image-gallery"}>
			<div className="container">
				<List items={items} type={"photo"} container={"image-gallery"} />
			</div>
		</Block>
	);
}

ImageGallery.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
		description: PropTypes.string,
	}),
	items: PropTypes.array,
};

ImageGallery.defaultProps = {
	heading: {
		title: "",
		subtitle: "",
		description: "",
	},
	items: "",
};

ImageGallery.displayName = "ImageGallery";
