import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import GeoMap from "@/components/elements/GeoMap";
import FeedbackForm from "@/components/widgets/FeedbackForm";
import { Button } from "@/components/elements/Form";

export default function MapSection() {
	return (
		<Block className={"text"} padding={""}>
			<div className={"w-full h-60 md:h-96 relative"} style={{ minHeight: "50vh" }}>
				<GeoMap />
				<div className={"hidden md:flex h-full w-3/12 md:absolute top-0 right-20 items-center"}>
					<div className={"h-5/6 w-full bg-gray-100 p-4 rounded-md flex flex-col items-stretch"}>
						<div className={"text-center text-black mb-4"}>
							<h2 className={"mb-4 uppercase"}>Заказать звонок</h2>
							<p>Оставьте ваши контактные данные и мы с вами свяжемся</p>
						</div>
						<FeedbackForm />
						<div className={"flex mt-4"}>
							<div className={"flex-1"}>
								<Button text={"Заказать"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Block>
	);
}

MapSection.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
