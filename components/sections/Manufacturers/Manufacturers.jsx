import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import List from "../../containers/List";
import Carousel from "../../containers/Carousel";

export default function Manufacturers({ heading, manufacturers }) {
	return (
		<Block heading={heading} className={"manufacturers"}>
			<div className="container mx-auto">
				<Carousel
					items={manufacturers}
					type={"manufacturer"}
					slidesPerView={1}
					breakpoints={
						{
							768: {
								slidesPerView: 6,
							},
						}
					}
					autoplay={
						{
							delay: 1500,
						}
					}
				/>
				{/* <List
					items={manufacturers}
					type={"manufacturer"}
					className={"flex flex-wrap flex-col md:flex-row justify-center px-4 md:px-2"}
					container={"carousel"}
				/> */}
			</div>
		</Block>
	);
}

Manufacturers.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	manufacturers: PropTypes.array,
};
