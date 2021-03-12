import React from "react";
import PropTypes from "prop-types";

export default function Social({ items }) {
	return (
		<div className={"social"}>
			{
				items.map(item => <></>)
			}
		</div>
	);
}

Social.propTypes = {
	items: PropTypes.array,
};
