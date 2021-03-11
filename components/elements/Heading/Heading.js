import React, { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import get from "lodash/get";

import styles from "./heading.module.scss";

console.log({ styles });
export default function Heading({ type, className, heading, underline }) {
	const { title, subText, subTitle } = heading;
	const classNames = {
		h1: "h1 mb-6 text-3xl md:text-5xl",
		h2: "h2 mb-6 text-3xl md:text-4xl",
	};

	return (
		<div className={cx("heading", { heading__underline: underline })}>
			{
				title && createElement(
					type,
					{
						className: cx("heading__title font-bold relative", className, classNames[type], styles._title),
					},
					title,
				)
			}
			{
				subTitle && (
					<p className={"heading__subtitle font-semibold mb-8 text-xl"}>{subTitle}</p>
				)
			}
			{
				subText && (
					<p className={"heading__subtext mb-4"}>{subText}</p>
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
	heading: {},
	underline: true,
};

Heading.displayName = "Heading";
