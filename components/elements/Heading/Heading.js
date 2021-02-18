import React, { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Heading.scss";

export default function Heading({ type, className, text, subText, underline }) {
	return (
		<div className={cx("heading", { heading__underline: underline })}>
			{
				createElement(
					type,
					{
						className: cx(className),
					},
					[text],
				)
			}
			{
				subText && (
					<span className={"heading__sub"}>{subText}</span>
				)
			}
		</div>
	);
}

Heading.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string,
	text: PropTypes.string,
	subText: PropTypes.string,
	underline: PropTypes.bool,
};

Heading.defaultProps = {
	type: "h2",
	className: "",
	text: "",
	subText: "",
	underline: true,
};

Heading.displayName = "Heading";
