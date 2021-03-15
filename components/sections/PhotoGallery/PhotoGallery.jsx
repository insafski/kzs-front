import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import List from "@/components/containers/List";

export default function VideoGallery({ heading, items }) {
	return (
		<Block heading={heading} className={"photo-gallery"}>
			<div className={"container"}>
				<List items={items} type={"photo"} container={"gallery"} />
			</div>
		</Block>
	);
}

VideoGallery.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
};
