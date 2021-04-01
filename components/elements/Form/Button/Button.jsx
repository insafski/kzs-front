import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// TODO: Need to split classnames for button types
export default function Button({ text, handlers, className, type, children }) {
	const types = {
		"default": {
			border: "border hover:border-gray-300 focus:border-gray-300",
			background: "",
			outline: "focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50",
		},
		"primary": {
			border: "border border-transparent hover:border-yellow-500 focus:border-yellow-500",
			background: "bg-yellow-400",
			outline: "focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50",
		},
		get(type) {
			return this[type] || this.default;
		},
	};

	const { border, background, outline } = types.get(type);

	return (
		<button
			className={cx("w-full inline-flex justify-center py-2 shadow-sm text-md font-medium rounded-md uppercase", border, background, outline, className)}
			{...handlers}
		>
			{text}
			{children}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	handlers: PropTypes.object,
	className: PropTypes.string,
	type: PropTypes.string,
};

Button.defaultProps = {
	text: PropTypes.string,
	handlers: PropTypes.object,
	className: PropTypes.string,
	type: "",
};
