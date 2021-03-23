import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import GeoMap from "@/components/elements/GeoMap";

export default function MapSection(props) {
	return (
		<Block className={"text"} padding={""}>
			<div className={"w-full h-60 md:h-96 relative"} style={{ height: "50vh" }}>
				<GeoMap />
				<div className={"container mx-auto hidden md:block lg:block absolute top-0 left-0 h-full w-full max-w-xl"}>
					<div className={"container mb-8 md:mb-0 absolute top-0 z-10"}>
						<ul className={"mt-8 px-4"}>
							{
								[
									{
										title: "Телефон",
										showtitle: "89876",
										link: "89876",
									},
									{
										title: "Почта",
										showtitle: "mail",
										link: "почта",
									},
								].map(({ title, showtitle, link }, idx) => {
									return (
										<li key={idx} className={"text-lg mb-4"}>
											<div className={"mb-1"}>
												{`${title}: `}<a href={link}>
													{showtitle}
												</a>
											</div>
										</li>
									);
								})
							}
						</ul>
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
