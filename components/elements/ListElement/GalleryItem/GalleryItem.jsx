import React from "react";
import PropTypes from "prop-types";
import { Item } from "react-photoswipe-gallery";
import get from "lodash/get";

export default function GalleryItem({ original, thumbnail, width, height, title, id }) {
	const srcOriginal = get(original, "src", "");
	const srcThumbnail = get(thumbnail, "src", "");

	return (
		<div className={"photo w-1/4 p-2"}>
			<Item
				original={srcOriginal}
				thumbnail={srcThumbnail}
				width="1024"
				height="768"
			>
				{
					({ ref, open }) => {
						return (
							<img
								className={"w-full"}
								ref={ref}
								onClick={open}
								src={srcThumbnail}
								alt={title}
								title={title}
							/>
						);
					}
				}
			</Item>
		</div>
	);
}

GalleryItem.propTypes = {
	original: PropTypes.string,
	thumbnail: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	title: PropTypes.string,
	id: PropTypes.string,
};

GalleryItem.defaultProps = {
	original: PropTypes.string,
	thumbnail: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	title: PropTypes.string,
	id: PropTypes.string,
};

GalleryItem.displayName = "GalleryItem";
