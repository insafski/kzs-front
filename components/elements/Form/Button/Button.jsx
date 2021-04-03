import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "@/components/elements/Icon";

// TODO: Need to split classnames for button types
export default function Button({ text, handlers, className, type, icon, iconPosition }) {
	const types = {
		"default": {
			border: "border hover:border-gray-300 focus:border-gray-300 rounded-md ",
			background: "",
			outline: "outline-none ring-0 ring-gray-300 ring-opacity-50 focus:ring focus:outline-none",
			transition: "transition-all duration-300 ease-in-out",
		},
		"primary": {
			border: "border border-transparent hover:border-yellow-500 focus:border-yellow-500 rounded-md",
			background: "bg-yellow-400",
			outline: "outline-none ring-0 ring-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 focus:outline-none",
			transition: "transition-all duration-300 ease-in-out",
		},
		get(type) {
			return this[type] || this.default;
		},
	};

	const { border, background, outline, transition } = types.get(type);

	return (
		<button
			className={cx("w-full inline-flex justify-center px-4 py-2 shadow-sm text-md font-medium uppercase", border, background, outline, transition, className)}
			{...handlers}
		>
			{
				icon && iconPosition === "left" && (
					<Icon type={icon} className={"mr-2"} />
				)
			}
			{text}
			{
				icon && iconPosition === "right" && (
					<Icon type={icon} className={"ml-2"} />
				)
			}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	handlers: PropTypes.object,
	className: PropTypes.string,
	type: PropTypes.string,
	icon: PropTypes.string,
	iconPosition: PropTypes.string,
};

Button.defaultProps = {
	text: PropTypes.string,
	handlers: PropTypes.object,
	className: PropTypes.string,
	type: "",
	icon: "",
	iconPosition: "left",
};
