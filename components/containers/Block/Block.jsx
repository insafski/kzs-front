import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Heading from "@/components/elements/Heading";

import styles from "./Block.module.scss";

export default function Block({ className, children, heading, style }) {
	return (
		<section className={cx(`${styles.block}`, "section pt-12 md:py-14 lg:py-16", className)} style={style}>
			<div className={"container mx-auto relative px-4"}>
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
	style: PropTypes.object,
};

Block.defaultProps = {
	className: "flex py-6",
	children: null,
	heading: {},
	style: {},
};

Block.displayName = "Block";
