import React from "react";
import PropTypes from "prop-types";

// FIXME: Need to fix this component

const Image = ({ picture, className }) => {
	const mediaObject = picture ? picture : {};

	const { url = "", alternativeText = "" } = mediaObject;

	const fullUrl = url && 0;

	return fullUrl && (
		<img src={fullUrl} alt={alternativeText || ""} className={className} />
	);

	return null;
};

Image.propTypes = {
	// TODO: Need to use shape of types
	picture: PropTypes.array,
	className: PropTypes.string,
};

export default Image;
