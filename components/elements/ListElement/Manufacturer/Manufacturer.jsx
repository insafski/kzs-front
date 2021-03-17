import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

export default function Manufacturer({ heading, slug, picture }) {
	const src = get(picture, "[0].src", "");
	const title = get(heading, "title", "");
	const description = get(heading, "description", "");

	return (
		<div className={"manufacturer flex justify-center md:px-8"}>
			<a href={`/catalog/${slug}`}>
				<img
					src={src}
					alt={title}
					title={description || title}
					style={{ width: "100%" }}
				/>
			</a>
		</div>
	);
}

Manufacturer.propTypes = {
	heading: PropTypes.object,
	slug: PropTypes.string,
	picture: PropTypes.object,
};
