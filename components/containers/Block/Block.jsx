import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Heading from "@/components/elements/Heading";

import styles from "./Block.module.scss";

export default function Block({ className, children, heading, style, padding, underline }) {
	return (
		<section className={cx(`${styles.block}`, "section", padding, className)} style={style}>
			<div className={"container relative px-4"}>
				<Heading heading={heading} underline={underline} />
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
	padding: PropTypes.string,
	underline: PropTypes.bool,
};

Block.defaultProps = {
	className: "flex",
	children: null,
	heading: {},
	style: {},
	padding: "py-12 md:py-14 lg:py-16",
	underline: true,
};

Block.displayName = "Block";
