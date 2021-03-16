import React from "react";
import PropTypes from "prop-types";
export default function Button({ text, handlers, children }) {
	return (
		<button
			className={"w-full inline-flex justify-center py-2 border border-transparent shadow-sm text-md font-medium rounded-md text-gray-700 bg-yellow-400 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 uppercase"}
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
};