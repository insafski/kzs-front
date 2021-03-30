import React from "react";
import PropTypes from "prop-types";
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types";

export default function Header({ top, middle, bottom }) {
	return (
		<header className={"header"}>
			{top}
			{middle}
			{bottom}
		</header>
	);
}

Header.propTypes = {
	top: PropTypes.object,
	middle: PropTypes.object,
	bottom: PropTypes.shape({
		logo: mediaPropTypes,
		links: PropTypes.arrayOf(linkPropTypes),
		button: buttonLinkPropTypes,
	}),
};
