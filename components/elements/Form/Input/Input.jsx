import React from "react";
import PropTypes from "prop-types";
import { Field } from "rc-field-form";
import cx from "classnames";
import uniqueId from "lodash/uniqueId";

export default function Input({ name, placeholder, value, type, required, className }) {
	const types = {
		border: "border border-yellow-400 hover:border-yellow-500 focus:border-yellow-500 rounded-md",
		background: "",
		outline: "outline-none ring-0 ring-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 focus:outline-none",
		transition: "transition-all duration-300 ease-in-out",
	};

	const { border, background, outline, transition } = types;

	return (
		<Field name={name}>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				className={cx("block w-full px-4 py-2 shadow-sm font-medium", border, background, outline, transition, className)}
				required={required}
			/>
		</Field>
	);
}

Input.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	required: PropTypes.bool,
	className: PropTypes.string,
};

Input.defaultProps = {
	name: uniqueId("input-name-"),
	placeholder: "",
	value: "",
	type: "text",
	required: false,
	className: "",
};

Input.displayName = "Input";
