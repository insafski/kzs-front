import React from "react";
import PropTypes from "prop-types";
import RCForm from "rc-field-form";

export default function Form({ children }) {
	return (
		<RCForm
			onFinish={
				values => {
					console.log("Finish:", values);
				}
			}
		>
			{children}
		</RCForm>
	);
}

Form.propTypes = {
	children: PropTypes.node,
};

Form.propTypes = {
	children: <></>,
};
