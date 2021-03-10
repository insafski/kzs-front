import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import GeoMap from "@/components/elements/GeoMap";

export default function Contacts({ heading }) {
	return (
		<Block heading={heading} className={"contacts"}>
			<div className={""}>
				<div className={"w-full h-60 md:h-96"}>
					<GeoMap />
				</div>
				<div>

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
