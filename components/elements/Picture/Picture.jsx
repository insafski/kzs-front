import React from "react";
import PropTypes from "prop-types";
import { isArray } from "lodash";
import cx from "classnames";

export default function Picture({ items, classNames }) {
	// TODO: Move to global params
	const BREAKPOINTS = {
		"sm": "640px",
		"md": "768px",
		"lg": "1024px",
		"xl": "1280px",
		"2xl": "1536px",
	};

	function makeSource(breakpoint, src, alt, title) {
		switch (breakpoint) {
			case "main":
				return <img className={cx("h-full rounded-md", classNames)} src={src} alt={alt} title={title} />;
			default:
				return <source srcSet={src} media={`(min-width: ${BREAKPOINTS[breakpoint]})`} />;
		}
	}

	return isArray(items) && items.length && (
		<picture>
			{
				items.map(({ breakpoint, src, alt, title }) => makeSource(breakpoint, src, alt, title))
			}
		</picture>
	);
}

Picture.propTypes = {
	items: PropTypes.array,
	classNames: PropTypes.string,
};

Picture.defaultProps = {
	items: [],
	classNames: "",
};

Picture.displayName = "Picture";
