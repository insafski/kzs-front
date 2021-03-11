import React, { createElement } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import ListItem from "../../elements/ListElement";

export default function Carousel({ items, type }) {
	return (
		<Swiper
			spaceBetween={32}
			slidesPerView={1}
			onSlideChange={() => console.log("slide change")}
			onSwiper={swiper => console.log(swiper)}
		>
			{
				items.map(({ picture, title, description, link }, idx) => {
					return (
						<SwiperSlide
							key={idx}
						>
							{
								createElement(
									ListItem.get(type),
									{
										key: `${type}-${idx}`,
										picture,
										title,
										description,
										link,
									},
									null,
								)
							}
						</SwiperSlide>
					);
				})
			}
		</Swiper>
	);
}

Carousel.propTypes = {
	items: PropTypes.array,
	type: PropTypes.string,
};

Carousel.defaultProps = {
	items: [1, 2, 4, 5],
	type: "baner",
};
