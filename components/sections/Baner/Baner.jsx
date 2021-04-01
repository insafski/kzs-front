import React from "react";
import PropTypes from "prop-types";

import Carousel from "../../containers/Carousel";

export default function Baner({ items }) {
	return (
		<div className={"baner"}>
			<div className={"container"}>
				<Carousel
					items={items}
					type={"baner"}
					slidesPerView={1}
					navigation={false}
					pagination={{ clickable: true }}
					breakpoints={
						{
							768: {
								navigation: true,
							},
						}
					}
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
