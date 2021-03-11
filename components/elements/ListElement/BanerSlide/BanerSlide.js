import React from "react";

export default function BanerSlide({ picture, title, description, link }) {
	return (
		<div className={"baner-slide"} style={{ height: "60vh" }}>
			<img
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
				src="https://tutby.gcdn.co/n/nedvizhimost/08/d/universalnyj-pogruzchik-amkodor-334s.jpg"
				alt=""
			/>
		</div>
	);
}
