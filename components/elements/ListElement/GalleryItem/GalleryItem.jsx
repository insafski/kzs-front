import React from "react";
import PropTypes from "prop-types";
import { Item } from "react-photoswipe-gallery";

export default function GalleryItem({ original, thumbnail, width, height, title, id }) {
	return (
		<div className={"photo w-1/4 p-2"}>
			<Item
				original="https://placekitten.com/1024/768?image=1"
				thumbnail="https://placekitten.com/80/60?image=1"
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
								src="https://placekitten.com/80/60?image=1"
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
