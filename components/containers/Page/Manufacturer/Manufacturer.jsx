import React from "react";
import PropTypes from "prop-types";

import Seo from "@/components/elements/seo";
import Block from "@/components/containers/Block";
import List from "@/components/containers/List";

export default function Manufacturer({ heading, products }) {
	return (
		<div className={"container"}>
			<Seo metadata={{}} />
			<Block heading={heading} padding={"pt-14"} underline={false} />
			<div className={"flex py-8"}>
				<div className={"px-4"}>
					<List
						items={products}
						type={"product"}
						className={"flex -mx-2 flex-wrap md:flex-nowrap"}
					/>
				</div>
			</div>
		</div>
	);
}

Manufacturer.propTypes = {
	heading: PropTypes.object,
	categories: PropTypes.array,
	products: PropTypes.array,
	preview: PropTypes.bool,
};

Manufacturer.defaultProps = {
	heading: {
		type: "h1",
		title: "",
		subtitle: "",
		description: "",
	},
	categories: [],
	products: [],
	preview: false,
};

Manufacturer.displayName = "ManufacturerTemplate";
