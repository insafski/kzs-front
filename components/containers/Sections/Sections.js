import React, { createElement } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import sectionsHashMap from "../../sections";

export default function Sections({ sections, manufacturers }) {
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
};

Sections.deafaultProps = {
	sections: [],
	manufacturers: [],
};

Sections.displayName = "Sections";
