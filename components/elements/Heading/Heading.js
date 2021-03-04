import React, { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import get from "lodash/get";

// import "./Heading.scss";

export default function Heading({ type, className, heading, underline }) {
	const { title, subText, subTitle } = heading;
	const classNames = {
		h1: "h1 md:text-5xl",
		h2: "h2 md:text-6xl",
	};

	return (
		<div className={cx("heading", { heading__underline: underline })}>
			{
				createElement(
					type,
					{
						className: cx("heading__title relative", className, classNames[type]),
					},
					title,
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
	heading: PropTypes.object,
	underline: PropTypes.bool,
};

Heading.defaultProps = {
	type: "h2",
	className: "",
	headong: {},
	underline: true,
};

Heading.displayName = "Heading";
