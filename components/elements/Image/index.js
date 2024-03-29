import React from "react";
import { getStrapiMedia } from "utils/media";
import PropTypes from "prop-types";
import { mediaPropTypes } from "utils/types";

export default function Image({ media, className }) {
	const mediaObject = media ? media : {};

	const { url = "", alternativeText = "" } = mediaObject;

	const fullUrl = url && getStrapiMedia(url);

	return fullUrl && (
		<img src={fullUrl} alt={alternativeText || ""} className={className} />
	);
}

Image.propTypes = {
	media: mediaPropTypes.isRequired,
	className: PropTypes.string,
};
