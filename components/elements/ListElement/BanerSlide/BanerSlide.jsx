import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Link from "next/link";

import styles from "./BanerSlide.module.scss";

export default function BanerSlide({ picture, title, description, link }) {
	return (
		<div className={cx("baner-slide relative", styles["baner-slide"])} style={{ height: "60vh" }}>
			<Link href={link}>
				<a>
					<img
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
						src="https://tutby.gcdn.co/n/nedvizhimost/08/d/universalnyj-pogruzchik-amkodor-334s.jpg"
						alt=""
					/>
					<div className={"baner-slide__content w-full absolute top-0"}>
						<div className={"container mx-auto px-12 mt-16"}>
							<h2 className={"text-4xl md:text-5xl text-white mb-8 font-semibold md:font-bold"}>{title}</h2>
							<p className={"text-3xl md:text-3xl text-white font-semibold"}>{description}</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}

BanerSlide.propTypes = {
	picture: PropTypes.array,
	title: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
};

BanerSlide.defaultProps = {
	picture: [],
	title: "",
	description: "",
	link: "/",
};
