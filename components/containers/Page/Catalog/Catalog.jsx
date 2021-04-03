import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import Seo from "@/components/elements/seo";
import Picture from "@/components/elements/Picture";
import Block from "@/components/containers/Block";
import Collapse from "@/components/containers/Collapse";
import List from "@/components/containers/List";

export default function Catalog({ heading, categories, products }) {
	categories = categories.reduce((result, { slug, m_slug, m_picture, m_heading, ...props }) => {
		const current = result.some(({ slug: currentSlug }) => currentSlug === slug);
		const manufacturer = {
			slug: m_slug,
			picture: m_picture,
			heading: m_heading,
			categorySlug: slug,
		};

		if (current) {
			const currentIdx = result.findIndex(({ slug: currentSlug }) => currentSlug === slug);

			result[currentIdx].links.push(manufacturer);
		} else {
			result.push({
				slug,
				...props,
				links: [manufacturer],
			});
		}

		return result;
	}, []);

	console.log(categories);

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

Catalog.propTypes = {
	heading: PropTypes.object,
	categories: PropTypes.array,
	products: PropTypes.array,
	preview: PropTypes.bool,
};

Catalog.defaultProps = {
	heading: {
		type: "h1",
		title: "Каталог",
		subtitle: "",
		description: "",
	},
	categories: [],
	products: [],
	preview: false,
};

Catalog.displayName = "CatalogTemplate";
