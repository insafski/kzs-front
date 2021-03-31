import React, { createElement } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import sectionsHashMap from "../../sections";

export default function Sections({ sections, manufacturers, news, products }) {
	return (
		<div className={"flex flex-col"}>
			{
				(sections || []).map((section, idx) => {
					const component = get(section, "component", "");
					const heading = get(section, "heading");

					return createElement(
						sectionsHashMap.get(component),
						{
							key: `${component}-${idx}`,
							heading,
							...section,
							manufacturers,
							news,
							products,
						},
					);
				})
			}
		</div>
	);
}

Sections.propTypes = {
	sections: PropTypes.array,
	manufacturers: PropTypes.array,
	news: PropTypes.array,
	products: PropTypes.array,
};

Sections.deafaultProps = {
	sections: [],
	manufacturers: [],
	news: [],
	products: [],
};

Sections.displayName = "Sections";
