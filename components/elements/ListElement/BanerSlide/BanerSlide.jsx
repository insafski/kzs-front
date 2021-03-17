import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Link from "next/link";
import get from "lodash/get";

import Icon from "../../../elements/Icon";

import styles from "./BanerSlide.module.scss";

export default function BanerSlide({ picture, heading, link }) {
	const src = get(picture, "[0].src", "");
	const title = get(heading, "title", "");
	const description = get(heading, "description", "");

	return (
		<div
			className={cx("baner-slide relative rounded-md overflow-hidden", styles["baner-slide"])}
			style={{ height: "60vh" }}
		>
			<Link href={link}>
				<a>
					<img
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
						src={src}
						alt=""
					/>
					<div className={"baner-slide__content w-full absolute top-0"}>
						<div className={"container mx-auto px-12 mt-16"}>
							<h2 className={"text-4xl md:text-5xl text-white mb-8 font-semibold md:font-bold"}>{title}</h2>
							<p className={"text-3xl md:text-3xl text-white font-semibold"}>{description}</p>
						</div>
					</div>
					<div className={"baner-slide__link absolute right-0 bottom-0 text-white py-12 px-16 uppercase font-semibold text-lg"}>
						Подробнее
						<Icon type={"angle-right"} className={"ml-2"} />
					</div>
				</a>
			</Link>
		</div>
	);
}

BanerSlide.propTypes = {
	picture: PropTypes.array,
	heading: PropTypes.object,
	link: PropTypes.string,
};

BanerSlide.defaultProps = {
	picture: [],
	heading: {},
	link: "/",
};
