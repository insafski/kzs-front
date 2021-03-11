import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default function Icon({ type, style, className }) {
	return (
		<i className={cx(`kzs-${type}`, className)} style={style} />
	);
}

Icon.propTypes = {
	type: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
};

Icon.defaulProps = {
	type: null,
	style: {},
	className: "",
};

Icon.displayName = "Icon";
