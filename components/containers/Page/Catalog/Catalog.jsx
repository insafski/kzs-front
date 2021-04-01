import React from "react";
import PropTypes from "prop-types";

import Seo from "@/components/elements/seo";
import Collapse from "@/components/containers/Collapse";

export default function Catalog({ categories, manufacturers }) {
	return (
		<div className={"container"}>
			<Seo metadata={{}} />
			<div className={"flex"}>
				<div className={"w-2/12"}>
					<Collapse items={categories} type={"panel-catalog"} />
				</div>
				<div className={"w-10/12"}>
				sadasd
				</div>
			</div>
		</div>
	);
}

Catalog.propTypes = {
	categories: PropTypes.array,
	manufacturers: PropTypes.array,
	preview: PropTypes.bool,
};

Catalog.defaultProps = {
	categories: [],
	manufacturers: {},
	preview: false,
};

Catalog.displayName = "CatalogTemplate";
