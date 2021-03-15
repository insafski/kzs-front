import React from "react";

import Carousel from "../../containers/Carousel";

export default function Baner(props) {
	return (
		<div className={"baner"}>
			<Carousel items={props.items}/>
		</div>
	);
}
