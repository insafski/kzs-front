import React from "react";
import PropTypes from "prop-types";

import Block from "@/components/containers/Block";
import List from "@/components/containers/List";

export default function Products({ heading, items, products }) {
	return (
		<Block heading={heading} className={"products"}>
			<div className={"container px-4"}>
				<List
					items={products || items}
					type={"product"}
					className={"flex -mx-2 flex-wrap md:flex-nowrap"}
				/>
			</div>
		</Block>
	);
}

Products.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	items: PropTypes.array,
	products: PropTypes.array,
};
