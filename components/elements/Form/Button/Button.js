import React from "react";
import PropTypes from "prop-types";
export default function Button({ text, handlers, className, children }) {
	return (
		<button
			className={`w-full inline-flex justify-center py-2 border border-gray-300 shadow-sm text-md font-medium rounded-md hover:border-yellow-500 focus:border-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 uppercase ${className}`}
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
};
