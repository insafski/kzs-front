import React from "react";
import Link from "next/link";
import moment from "moment";
import PropTypes from "prop-types";
import get from "lodash/get";

import Picture from "@/components/elements/Picture";

export default function Product({ heading, picture, slug }) {
	const title = get(heading, "title", "");
	const description = get(heading, "description", "");

	return (
		<div className={"product mb-4 px-2 md:w-1/4"}>
			<div className={"product__picture mb-2"}>
				<Link href={`/novosti/${slug}`}>
					<a>
						<Picture items={picture} />
					</a>
				</Link>
			</div>
			<div className={"product__title mb-4"}>
				<Link href={`/products/${slug}`}>
					<a className={"text-xl font-semibold"}>{title}</a>
				</Link>
			</div>
			<div className={"product__description text-sm"}>
				<p>
					{description}
				</p>
			</div>
		</div>
	);
}

Product.propTypes = {
	heading: PropTypes.object,
	description: PropTypes.string,
	publishedAt: PropTypes.string,
	picture: PropTypes.array,
	slug: PropTypes.array,
};

Product.propTypes = {
	heading: {},
	description: "",
	publishedAt: "",
	picture: [],
	slug: "",
};

Product.displayName = "NewsItem";
