import React from "react";
import PropTypes from "prop-types";
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types";

export default function Header({ top, navbar }) {
	return (
		<header className={"p-2"}>
			<div className={"container"}>
				{top}
				{navbar}
			</div>
		</header>
	);
}

Header.propTypes = {
	navbar: PropTypes.shape({
		logo: mediaPropTypes,
		links: PropTypes.arrayOf(linkPropTypes),
		button: buttonLinkPropTypes,
	}),
};
