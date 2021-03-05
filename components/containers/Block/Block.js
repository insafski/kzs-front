import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Heading from "@/components/elements/Heading";

import styles from "./Block.module.scss";

export default function Block({ className, children, heading }) {
	return (
		<section className={cx(`${styles.block}`, "block py-16", className)}>
			<div className={"container mx-auto px-4"}>
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
