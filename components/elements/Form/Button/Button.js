import React from "react";
import PropTypes from "prop-types";

export default function Button({ text, handlers }) {
	return (
		<button
			className={"w-full inline-flex justify-center py-4 border border-transparent shadow-sm text-md font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 uppercase"}
			{...handlers}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	handlers: PropTypes.object,
};
