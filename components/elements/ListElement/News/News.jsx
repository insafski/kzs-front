import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import get from "lodash/get";

export default function News({ title, publishedAt, picture, description }) {
	const src = get(picture, "[0].src", "");

	return (
		<div className={"news-item mb-4 px-2 w-1/2 md:w-4/12"}>
			<div className={"news-item__picture mb-2"}>
				<Link href="/">
					<a>
						<img
							className={"w-full"}
							src={src}
							alt={title}
							title={title}
						/>
					</a>
				</Link>
			</div>
			<div className={"news-item__date text-sm text-gray-700 mb-2"}>
				{publishedAt}
			</div>
			<div className={"news-item__title mb-4"}>
				<Link href={"/"}>
					<a className={"text-xl font-semibold"}>{title}</a>
				</Link>
			</div>
			<div className={"news-item__description text-sm"}>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium amet tenetur neque, cupiditate maxime reprehenderit similique voluptate saepe hic voluptatibus recusandae iste sapiente mollitia qui. Illum accusamus corrupti similique esse.
				</p>
			</div>
		</div>
	);
}

News.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	publishedAt: PropTypes.string,
	picture: PropTypes.array,
};

News.propTypes = {
	title: "",
	description: "",
	publishedAt: "",
	picture: [],
};

News.displayName = "NewsItem";
