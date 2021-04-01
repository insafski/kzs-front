import React from "react";
import PropTypes from "prop-types";

import Seo from "@/components/elements/seo";

export default function Catalog({ categories, manufacturers }) {
	return (
		<>
			<Seo metadata={{}} />
		</>
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
