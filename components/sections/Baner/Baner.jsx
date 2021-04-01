import React from "react";
import PropTypes from "prop-types";

import Carousel from "@/components/containers/Carousel";

export default function Baner({ items }) {
	return (
		<div className={"baner"}>
			<div className={"container"}>
				<Carousel
					items={items}
					type={"baner"}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					// breakpoints={
					// 	{
					// 		// TODO: Need toh hide arrows on mobile
					// 		500: {
					// 			navigation: true,
					// 		},
					// 	}
					// }
					autoplay={
						{
							delay: 6000,
						}
					}
				/>
			</div>
		</div>
	);
}

Baner.propTypes = {
	items: PropTypes.array,
};
