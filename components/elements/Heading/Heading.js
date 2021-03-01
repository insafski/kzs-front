import React, { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Heading.scss";

export default function Heading({ type, className, text, subText, subTitle, underline }) {
	const heading = {
		h1: "h1 md:text-5xl",
		h2: "h2 md:text-6xl",
	};

	return (
		<div className={cx("heading", { heading__underline: underline })}>
			{
				createElement(
					type,
					{
						className: cx(className),
					},
					text,
				)
			}
			{
				subTitle && (
					<span className={"heading__subtitle"}>{subTitle}</span>
				)
			}
			{
				subText && (
					<span className={"heading__subtext"}>{subText}</span>
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
	subTitle: PropTypes.string,
	underline: PropTypes.bool,
};

Heading.defaultProps = {
	type: "h2",
	className: "",
	text: "",
	subText: "",
	subTitle: "",
	underline: true,
};

Heading.displayName = "Heading";
