import React from "react";
import PropTypes from "prop-types";
import { isArray } from "lodash";

export function Picture({ items }) {
	if (!isArray(items) || !items.length) {
		return null;
	}

	const BREAKPOINTS = {
		"sm": "640px",
		"md": "768px",
		"lg": "1024px",
		"xl": "1280px",
		"2xl": "1536px",
	};

	return (
		<picture>
			{
				items.map(({ breakpoint, src, alt, title }) => {
					return breakpoint !== "main"
						? <source srcSet={src} media={`(min-width: ${BREAKPOINTS[breakpoint]})`} />
						: <img className={"h-full object-none"} src={src} alt={alt} title={title} />;
				})
			}
		</picture>
	);
}

Picture.propTypes = {
	items: PropTypes.array,
};

Picture.defaultProps = {
	items: [],
};
