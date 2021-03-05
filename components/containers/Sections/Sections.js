import React, { createElement } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import sectionsHashMap from "../../sections";

export default function Sections({ sections }) {
	return (
		<div className={"flex flex-col"}>
			{
				(sections || []).map((section, idx) => {
					const component = get(section, "component", "");
					const heading = {
						title: get(section, "title"),
						subTitle: get(section, "subtitle"),
						subText: get(section, "description"),
					};

					return createElement(
						sectionsHashMap.get(component),
						{
							key: `${component}-${idx}`,
							heading,
							...section,
						},
					);
				})
			}
		</div>
	);
}

Sections.propTypes = {
	sections: PropTypes.array,
};

Sections.deafaultProps = {
	sections: [],
};

Sections.displayName = "Sections";
