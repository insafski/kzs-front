import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Heading from "@/components/elements/Heading";

// import "./Block.scss";

export default function Block({ className, children, heading }) {
	return (
		<section className={cx("block", className)}>
			<div className={"container mx-auto"}>
				<Heading heading={heading} />
			</div>
			{children}
		</section>
	);
}

Block.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	heading: PropTypes.object,
};

Block.defaultProps = {
	className: "flex py-6",
	children: null,
	heading: {},
};

Block.displayName = "Block";
