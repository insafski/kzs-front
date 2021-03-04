import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Block.scss";

export default function Block({ className, children }) {
	return (
		<div className={cx("block", className)}>
			<div className={"container mx-auto"}>
				{children}
			</div>
		</div>
	);
}

Block.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Block.defaultProps = {
	className: "flex py-6",
	children: null,
};

Block.displayName = "Block";
