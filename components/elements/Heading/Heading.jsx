import React, { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import trim from "lodash/trim";

import styles from "./heading.module.scss";
export default function Heading({ className, heading, underline }) {
	const { title, description, subtitle, type = "h2" } = heading;
	const classNames = {
		h1: cx("h1 text-3xl md:text-5xl mb-4", { "mb-6": underline }),
		h2: "h2 mb-6 text-3xl",
	};

	const renderHeading = title || subtitle || description;

	return !!renderHeading && (
		<div className={cx("heading")}>
			{
				trim(title) && createElement(
					type,
					{
						className: cx("heading__title font-bold relative", className, classNames[type], { [styles._title]: underline }),
					},
					title,
				)
			}
			{
				subtitle && (
					<p className={"heading__subtitle font-semibold mb-8 text-xl"}>{subtitle}</p>
				)
			}
			{
				description && (
					<p className={cx("heading__subtext mb-4", styles.heading__subtext)}>{description}</p>
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
