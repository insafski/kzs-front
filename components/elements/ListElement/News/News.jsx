import React from "react";
import Link from "next/link";
import moment from "moment";
import PropTypes from "prop-types";
import get from "lodash/get";

import Picture from "@/components/elements/Picture";

export default function News({ heading, publishedAt, picture, slug }) {
	const title = get(heading, "title", "");
	const description = get(heading, "description", "");
	const newsDate = moment(publishedAt).format("DD.MM.YYYY");

	return (
		<div className={"news-item mb-4 px-2 w-1/2 md:w-4/12"}>
			<div className={"news-item__picture mb-2"}>
				<Link href={`/novosti/${slug}`}>
					<a>
						<Picture items={picture} />
					</a>
				</Link>
			</div>
			<div className={"news-item__date text-sm text-gray-700 mb-4"}>
				{newsDate}
			</div>
			<div className={"news-item__title mb-4"}>
				<Link href={`/novosti/${slug}`}>
					<a className={"text-xl font-semibold"}>{title}</a>
				</Link>
			</div>
			<div className={"news-item__description text-sm"}>
				<p>
					{description}
				</p>
			</div>
		</div>
	);
}

News.propTypes = {
	heading: PropTypes.object,
	description: PropTypes.string,
	publishedAt: PropTypes.string,
	picture: PropTypes.array,
	slug: PropTypes.array,
};

News.propTypes = {
	heading: {},
	description: "",
	publishedAt: "",
	picture: [],
	slug: "",
};

News.displayName = "NewsItem";
