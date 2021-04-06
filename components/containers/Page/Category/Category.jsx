import React from "react";
import PropTypes from "prop-types";

import Seo from "@/components/elements/seo";
import Block from "@/components/containers/Block";
import Collapse from "@/components/containers/Collapse";
import List from "@/components/containers/List";

export default function Category({ heading, products, categories }) {
	return (
		<div className={"container"}>
			<Seo metadata={{}} />
			<Block heading={heading} padding={"pt-14"} underline={false} />
			<div className={"flex py-8"}>
				<div className={"w-3/12 px-4"}>
					<Collapse items={categories} type={"panel-catalog"} />
				</div>
				<div className={"w-9/12 px-4"}>
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

Category.propTypes = {
	heading: PropTypes.object,
	categories: PropTypes.array,
	products: PropTypes.array,
	preview: PropTypes.bool,
};

Category.defaultProps = {
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

Category.displayName = "CategoryTemplate";
