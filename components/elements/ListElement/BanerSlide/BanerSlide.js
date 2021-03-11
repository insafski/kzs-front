import React from "react";
import cx from "classnames";

import styles from "./BanerSlide.module.scss";

export default function BanerSlide({ picture, title, description, link }) {
	return (
		<div className={cx("baner-slide relative", styles["baner-slide"])} style={{ height: "60vh" }}>
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
					<h2 className={"text-6xl text-white mb-4 font-bold"}>Заголовок</h2>
					<p className={"text-5xl text-white font-semibold"}>Описание</p>
				</div>
			</div>
		</div>
	);
}
