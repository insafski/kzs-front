import React from "react";
import PropTypes from "prop-types";

export default function Icon({ type }) {
	return (
		<i className={`kzs-${type}`} />
	);
}

Icon.propTypes = {
	type: PropTypes.string,
};

Icon.defaulProps = {
	type: null,
};

Icon.displayName = "Icon";
