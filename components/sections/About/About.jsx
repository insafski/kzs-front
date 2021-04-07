import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import cx from "classnames";

import Heading from "@/components/elements/Heading";

import styles from "./styles.module.scss";

export default function About({ heading, picture, bgColor }) {
	const title = get(heading, "title", "");
	const src = get(picture, "[0].src", "");

	return (
		<section className={"section about py-12 md:py-14"} style={{
			background: bgColor,
		}}>
			<div className={"flex px-4 md:px-0"}>
				<div className={cx("about__image hidden md:block relative md:w-1/2 rounded-3xl overflow-hidden mt-4", styles.about__image)}>
					<img src={src} alt={title} className={"w-full"} />
				</div>
				<div className={"about__content md:w-1/2 md:pl-14 md:pr-4"}>
					<Heading heading={heading} />
				</div>
			</div>
		</section>
	);
}

About.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	picture: PropTypes.array,
	bgColor: PropTypes.string,
};

About.defaultProps = {
	data: {},
	picture: [],
	bgColor: "",
};

About.displayName = "About";
