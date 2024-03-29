import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import GeoMap from "@/components/elements/GeoMap";
import FeedbackForm from "@/components/widgets/FeedbackForm";
import { Button } from "@/components/elements/Form";

export default function MapSection() {
	return (
		<Block className={"text"} padding={""}>
			<div className={"w-full h-60 md:h-96 relative"} style={{ minHeight: "35rem" }}>
				<GeoMap />
				<div className={"hidden md:flex h-full w-3/12 md:absolute top-0 right-20 items-center"}>
					<div className={"h-5/6 w-full bg-gray-100 border border-gray-300 rounded-md flex flex-col items-stretch justify-between"}>
						<div className={"border-b p-4 text-center"}>
							<h2 className={"text-3xl font-bold mb-4"}>Заказать звонок</h2>
							<p>Оставьте ваши контактные данные и мы с вами свяжемся</p>
						</div>
						<div className={"px-4"}>
							<FeedbackForm />
						</div>
						<div className={"flex p-4 border-t"}>
							<div className={"flex-1"}>
								<Button type={"primary"} text={"Заказать"} />
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
