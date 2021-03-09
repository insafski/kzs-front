import React from "react";
import PropTypes from "prop-types";

import Block from "../../containers/Block";
import List from "../../containers/List";

export default function Manufacturers({ heading, manufacturers }) {
	return (
		<Block heading={heading} className={"manufacturers"}>
			<div className="container mx-auto">
				<List items={manufacturers} type={"manufacturer"} className={"flex flex-wrap px-4"} />
			</div>
		</Block>
	);
}

Manufacturers.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
	manufacturers: PropTypes.array,
};
