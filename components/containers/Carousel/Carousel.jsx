import React, { createElement } from "react";
import PropTypes from "prop-types";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ListItem from "../../elements/ListElement";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel({ items, type, slidesPerView, navigation, pagination, breakpoints, autoplay }) {
	return (
		<Swiper
			spaceBetween={32}
			slidesPerView={slidesPerView}
			onSlideChange={() => console.log("slide change")}
			onSwiper={swiper => console.log(swiper)}
			navigation={navigation}
			pagination={pagination}
			scrollbar={{ draggable: true }}
			breakpoints={breakpoints}
			autoplay={autoplay}
			loop={true}
		>
			{
				items.map((item, idx) => {
					return (
						<SwiperSlide
							key={idx}
						>
							{
								createElement(
									ListItem.get(type),
									{
										key: `${type}-${idx}`,
										...item,
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
	slidesPerView: PropTypes.number,
	navigation: PropTypes.bool,
	pagination: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	breakpoints: PropTypes.object,
	autoplay: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Carousel.defaultProps = {
	items: [],
	type: "baner",
	slidesPerView: 1,
	navigation: false,
	pagination: false,
	breakpoints: {},
	autoplay: false,
};
