import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import GeoMap from "@/components/elements/GeoMap";

export default function Contacts({ heading }) {
	return (
		<Block heading={heading} className={"contacts"}>
			<div className={"relative"}>
				<div className={"w-full h-60 md:h-96 mb-4"}>
					<GeoMap />
				</div>
				<div className={"px-4 md:absolute"}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam quod labore! Accusamus nesciunt ad harum asperiores incidunt, autem adipisci corrupti ducimus dolores, aperiam voluptate nostrum quidem est labore. Veniam.
				</div>
			</div>
		</Block>
	);
}

Contacts.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
