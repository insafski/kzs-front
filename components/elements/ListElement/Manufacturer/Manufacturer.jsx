import React from "react";
import PropTypes from "prop-types";

export default function Manufacturer({ heading, slug, picture }) {
	return (
		<div className={"manufacturer md:px-2 md:w-2/4 lg:w-2/6 xl:w-3/12"}>
			<a href={`/catalog/${slug}`}>
				<div className={"flex justify-between items-center text-xl p-8 bg-gray-100 mb-4 rounded-md"}>
					{heading.title}
					<img src="https://nationalrent.ru/local/templates/nationalrent/img/catalog/doosan-logo.png" alt="" style={{ height: 40 }}/>
				</div>
			</a>
		</div>
	);
}

Manufacturer.propTypes = {
	heading: PropTypes.object,
	slug: PropTypes.string,
	picture: PropTypes.object,
};
