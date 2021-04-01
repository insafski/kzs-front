import React from "react";
import PropTypes from "prop-types";
import { Field } from "rc-field-form";
import cx from "classnames";
import uniqueId from "lodash/uniqueId";

export default function Input({ name, placeholder, value, type, required, className }) {
	return (
		<Field name={name}>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				className={cx("block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm hover:border-yellow-400 font-medium focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50", className)}
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
